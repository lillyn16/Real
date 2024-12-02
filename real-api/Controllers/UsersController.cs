using Microsoft.AspNetCore.Mvc;
using RealApi.Models;
using RealApi.Services;

namespace RealApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        // POST: api/users
        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] RegisterDto dto)
        {
            if (dto == null)
            {
                return BadRequest("User data is null.");
            }

            try
            {
                // Call the UserService to create a new user
                var user = await _userService.CreateUser(
                    dto.Username, dto.Password, 
                    dto.SecurityQuestion, dto.SecurityAnswer);

                // Return a 201 Created response with the user's Id and Username
                return CreatedAtAction(nameof(GetUsers), new { id = user.UserID }, user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // GET: api/users
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            try
            {
                // Get all users from the UserService
                var users = await _userService.GetUsersAsync();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
