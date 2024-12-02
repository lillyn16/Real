using System;

namespace RealApi.Models
{
    public class PhaseRequest
    {
        public int UserId { get; set; }
        public DateTime LastPeriodStart { get; set; }
        public DateTime LastPeriodEnd { get; set; }
        public int CycleLength { get; set; }
        public int PeriodLength { get; set; }
    }
}