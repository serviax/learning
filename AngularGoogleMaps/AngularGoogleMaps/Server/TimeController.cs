using System;
using System.Web.Http;

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
        public string GetCurrentTime()
        {
            return DateTime.Now.ToString();
        }
    }
}