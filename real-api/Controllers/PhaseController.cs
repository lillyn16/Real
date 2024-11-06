using Microsoft.AspNetCore.Mvc;
using System;
using RealApi.Models;

namespace RealApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PhaseController : ControllerBase
    {
        [HttpGet("{userId}")]
        public IActionResult GetPeriodWeek(int userId)
        {
            // Mock data - Replace with actual data retrieval from DB
            var phase = new Phase
            {
                UserId = userId,
                LastPeriodStart = DateTime.Now.AddDays(-15), // Example start
                CycleLength = 28,
                PeriodLength = 5
            };

            DateTime nextPeriodStart = phase.LastPeriodStart.AddDays(phase.CycleLength);
            DateTime nextPeriodEnd = nextPeriodStart.AddDays(phase.PeriodLength);

            DateTime ovulationStart = phase.LastPeriodStart.AddDays(phase.CycleLength / 2 - 2); // cycle length / 2 and sets date to two days before
            DateTime ovulationEnd = ovulationStart.AddDays(4); // Approx 4-day fertile window

            // Determine the current phase
            string currentPhase;
            double daysSinceLastPeriod = (currentDate - phase.LastPeriodStart).TotalDays;

            if (daysSinceLastPeriod <= phase.PeriodLength)
            {
                currentPhase = "Menstrual";
            }
            else if (daysSinceLastPeriod > phase.PeriodLength && daysSinceLastPeriod <= (phase.CycleLength / 2) - 2)
            {
                currentPhase = "Follicular";
            }
            else if (daysSinceLastPeriod > (phase.CycleLength / 2) - 2 && daysSinceLastPeriod <= (phase.CycleLength / 2) + 2)
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
                isCurrentWeekPeriod = currentDate >= phase.LastPeriodStart && currentDate <= phase.LastPeriodStart.AddDays(phase.PeriodLength)
            });
        }
    }
}