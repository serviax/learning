using System;
using System.Web.Http;
using System.Web.Http.Description;

namespace AngularGoogleMaps.Server
{

    /// <summary>
    /// Time Controller
    /// </summary>
    [RoutePrefix("api/time")]
    public class TimeController : ApiController
    {
        /// <summary>
        /// gets the current time
        /// </summary>
        /// <returns>current time</returns>
        [Route("get-time")]
        //[ResponseType(typeof(string))]
        [HttpGet]
        public string GetCurrentTime([FromUri] string name)
        {
            return DateTime.Now.ToString();
        }

        public string Get()
        {
            return DateTime.Now.ToString();
        }
    }
}