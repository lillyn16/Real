namespace RealApi.Models 
{
    public class User {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string SecurityQuestion { get; set; } 
        public string SecurityAnswerHash { get; set; }
    }
}