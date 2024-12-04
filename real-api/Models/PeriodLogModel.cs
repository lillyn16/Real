using System.ComponentModel.DataAnnotations;

namespace RealApi.Models 
{
    public class PeriodLog
    {
        [Key]
        public int RecordId { get; set; }
        public int UserId { get; set; }
        public DateTime PeriodDate { get; set; }
    }
}