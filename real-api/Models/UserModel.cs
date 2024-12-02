namespace RealApi.Models 
{
    public class User {
        public int UserID { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string SecurityQuestion { get; set; } 
        public string SecurityAnswerHash { get; set; }
    }
}