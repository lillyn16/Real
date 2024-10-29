// using Microsoft.AspNetCore.Mvc;

// namespace RealApi.Controllers 
// {
//     [ApiController]
//     [Route("[controller]")]
//     public class UsersController : ControllerBase
//     {
//         private readonly ILogger<UsersController> _logger;
//         private List<User> users;
//         public UsersController(ILogger<UsersController> logger)
//         {
//             _logger = logger;
//             users = PopulateUsers();
//         }

//         [HttpGet(Name = "GetUsers")]
//         public IEnumerable<User> Get()
//         {
//             return users;
//         }

//         // [HttpGet("{id}")]
//         // public ActionResult<User> GetUser(int id)
//         // {
//         //     var user = users.Find(id);
//         //     if (user == null) return NotFound();
//         //     return user;
//         // }

//         // [HttpPost]
//         // public ActionResult<User> Create(User user)
//         // {
//         //     _context.Users.Add(user);
//         //     _context.SaveChanges();
//         //     return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
//         // }

//         // [HttpPut("{id}")]
//         // public ActionResult Update(int id, User user)
//         // {
//         //     if (id != user.Id) return BadRequest();
//         //     _context.Entry(user).State = EntityState.Modified;
//         //     _context.SaveChanges();
//         //     return NoContent();
//         // }

//         // [HttpDelete("{id}")]
//         // public ActionResult Delete(int id)
//         // {
//         //     var user = _context.Users.Find(id);
//         //     if (user == null) return NotFound();
//         //     _context.Users.Remove(user);
//         //     _context.SaveChanges();
//         //     return NoContent();
//         // }

//         List<User> PopulateUsers()
//         {
//             return new List<User>
//             {
//                 new User
//                 {
//                     Id = 1,
//                     Username = "Rachel",
//                     Password = "Password1",
//                     SecturityQuestion = "What is your role?",
//                     SecurityAnswer = "Full Stack"
//                 },
//                  new User
//                 {
//                     Id = 2,
//                     Username = "Rachel2",
//                     Password = "Password1",
//                     SecturityQuestion = "What is your role?",
//                     SecurityAnswer = "Full Stack"
//                 },
//                   new User
//                 {
//                     Id = 3,
//                     Username = "Rachel3",
//                     Password = "Password1",
//                     SecturityQuestion = "What is your role?",
//                     SecurityAnswer = "Full Stack"
//                 },
//                 new User
//                 {
//                     Id = 4,
//                     Username = "Rachel4",
//                     Password = "Password1",
//                     SecturityQuestion = "What is your role?",
//                     SecurityAnswer = "Full Stack"
//                 },
//             };
//         }
//     }
// }