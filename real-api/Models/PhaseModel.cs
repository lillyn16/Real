namespace RealApi.Models 
{
    public class Phase {
        public int UserId { get; set; }
        public DateTime LastPeriodStart { get; set; }
        public int CycleLength { get; set; } // Typically 28 days
        public int PeriodLength { get; set; } // Typically 5-7 days
    }
}