using Microsoft.AspNetCore.Mvc;
using System;
using RealApi.Models;
using RealApi.Data;
using System.Linq;

namespace RealApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PhaseController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PhaseController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public IActionResult AddPhase([FromBody] PhaseRequest request)
        {
            if (request == null)
            {
                return BadRequest("Invalid phase data.");
            }

            // Create a new Phase object
            var newPhase = new Phase
            {
                UserId = request.UserId,
                LastPeriodStart = request.LastPeriodStart,
                LastPeriodEnd = request.LastPeriodEnd,
                CycleLength = request.CycleLength,
                PeriodLength = request.PeriodLength
            };

            // Add new phase to db
            _context.Phases.Add(newPhase);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetPeriodWeek), new { userId = newPhase.UserId }, newPhase);
        }

        [HttpGet("{userId}")]
        public IActionResult GetPeriodWeek(int userId)
        {
            var phase = _context.Phases.FirstOrDefault(p => p.UserId == userId);
            if (phase == null)
            {
                return NotFound("Phase information not found for the user.");
            }

            DateTime nextPeriodStart = phase.LastPeriodStart.AddDays(phase.CycleLength);
            DateTime nextPeriodEnd = nextPeriodStart.AddDays(phase.PeriodLength);

            DateTime ovulationStart = phase.LastPeriodStart.AddDays(phase.CycleLength / 2 - 2);
            DateTime ovulationEnd = ovulationStart.AddDays(4);

            DateTime currentDate = DateTime.Now;
            string currentPhase;
            double daysSinceLastPeriod = (currentDate - phase.LastPeriodStart).TotalDays;

            if (daysSinceLastPeriod >= 0 && daysSinceLastPeriod <= phase.PeriodLength)
            {
                currentPhase = "Menstrual";
            }
            else if (daysSinceLastPeriod > phase.PeriodLength && daysSinceLastPeriod <= phase.CycleLength / 2 - 2)
            {
                currentPhase = "Follicular";
            }
            else if (daysSinceLastPeriod > phase.CycleLength / 2 - 2 && daysSinceLastPeriod <= phase.CycleLength / 2 + 2)
            {
                currentPhase = "Ovulatory";
            }
            else
            {
                currentPhase = "Luteal";
            }

            return Ok(new
            {
                currentPhase,
                nextPeriodStart,
                nextPeriodEnd,
                ovulationStart,
                ovulationEnd,
                isCurrentWeekPeriod = currentDate >= nextPeriodStart && currentDate <= nextPeriodEnd
            });
        }
    }
}
