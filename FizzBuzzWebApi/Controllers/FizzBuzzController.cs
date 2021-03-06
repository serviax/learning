using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace FizzBuzzWebApi.Controllers
{
    [Route("api/[controller]")]
    
    public class FizzBuzzController : Controller
    {
        [EnableCors("AllowSpecificDomains")]
        [HttpGet("{number}")]
        public string Get(int number)
        {
            var result = string.Empty;
            
            if ( number % 3 == 0)
            {
                result += "Fizz";
            }
            
            if (number % 5 == 0)
            {
                result += "Buzz";
            }
            
            if (string.IsNullOrWhiteSpace(result))
            {
                result += number.ToString();
            }
            
            return result;
        }
    }
}


