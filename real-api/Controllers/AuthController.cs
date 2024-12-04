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
        public async Task<IActionResult> Register([FromBody] RegisterModel registerModel)
        {
            try
            {
                var user = await _authService.CreateUser(
                    registerModel.Username, registerModel.Password, 
                    registerModel.SecurityQuestion, registerModel.SecurityAnswer);

                HttpContext.Session.SetInt32("userId", user.UserID);

                return Ok(new { user.UserID, user.Username });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            try
            {
                var user = await _authService.Authenticate(loginModel.Username, loginModel.Password);

                if (user == null)
                {
                    return Unauthorized("Invalid username or password");
                }

                HttpContext.Session.SetInt32("userId", user.UserID);

                return Ok(user.UserID);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("check-session")]
        public IActionResult CheckSession()
        {
            var userId = HttpContext.Session.GetInt32("userId");

            if (userId == null)
            {
                return Unauthorized(new { message = "Session expired" });
            }

            return Ok(new { userId });
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Ok(new { message = "Logout successful" });
        }
    }
}
