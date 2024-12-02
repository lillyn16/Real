using Microsoft.AspNetCore.Mvc;
using RealApi.Models;
using RealApi.Services;

namespace RealApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            try
            {
                var user = await _authService.CreateUser(
                    dto.Username, dto.Password, 
                    dto.SecurityQuestion, dto.SecurityAnswer);

                return Ok(new { user.UserID, user.Username });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto dto)
        {
            var user = _authService.Authenticate(dto.Username, dto.Password);
            if (user == null)
                return Unauthorized("Invalid username or password");

            return Ok("Login successful");
        }
    }

    public class RegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string SecurityQuestion { get; set; }
        public string SecurityAnswer { get; set; }
    }

    public class LoginDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
