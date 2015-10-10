using DeepHouseBelgium.Models;
using System;
using System.Web.Http;

namespace DeepHouseBelgium.Controllers
{
    [RoutePrefix("vote")]
    public class VoteApiController : ApiController
    {
        private readonly IVoteProvider _voteProvider;

        public VoteApiController(IVoteProvider voteProvider)
        {
            _voteProvider = voteProvider;
        }

        [Route("get-options")]
        [HttpGet]
        public VoteOptionList Options()
        {
            return new VoteOptionList(_voteProvider.VoteOptions);
        }

        [Route("current-time")]
        [HttpGet]
        public string CurrentTime()
        {
            return DateTime.Now.ToString();
        }


    }
}
