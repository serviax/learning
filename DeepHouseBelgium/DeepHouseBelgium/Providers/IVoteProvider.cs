using DeepHouseBelgium.Models;
using System.Collections.Generic;

namespace DeepHouseBelgium.Controllers
{
    public interface IVoteProvider
    {
        List<VoteOption> VoteOptions { get; set; }
    }

    public class VoteProvider : IVoteProvider
    {

        public List<VoteOption> VoteOptions { get; set; }

        public VoteProvider()
        {
            VoteOptions = new List<VoteOption>();

            VoteOptions.Add(new VoteOption { Id = "1", Name = "Antwerpen", Count = 0 });
            VoteOptions.Add(new VoteOption { Id = "2", Name = "Brussel", Count = 0 });
            VoteOptions.Add(new VoteOption { Id = "3", Name = "Leuven", Count = 0 });
            VoteOptions.Add(new VoteOption { Id = "4", Name = "Mechelen", Count = 0 });
            VoteOptions.Add(new VoteOption { Id = "5", Name = "Lier", Count = 0 });
        }

    }
}