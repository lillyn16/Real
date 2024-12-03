namespace RealApi.Models 
{
    public class User {
        public int UserID { get; set; }
        public string Username { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string SecurityQuestion { get; set; } = string.Empty;
        public string SecurityAnswerHash { get; set; } = string.Empty;
    }
}