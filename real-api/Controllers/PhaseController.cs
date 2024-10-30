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

            var isCurrentWeekPeriod = DateTime.Now >= nextPeriodStart && DateTime.Now <= nextPeriodEnd;

            return Ok(new
            {
                nextPeriodStart,
                nextPeriodEnd,
                isCurrentWeekPeriod
            });
        }
    }
}