namespace RealApi.Models 
{
    public class Phase {
        public int RecordId { get; set; }
        public int UserId { get; set; }
        public DateTime LastPeriodStart { get; set; }
        public DateTime LastPeriodEnd { get; set; }
        public int CycleLength { get; set; } // Average cycle length
        public int PeriodLength { get; set; } // Average period length
    }
}