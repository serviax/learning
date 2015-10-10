using System.Collections.Generic;
using WebApi.Hal;

namespace DeepHouseBelgium.Models
{
    public class VoteOptionList : SimpleListRepresentation<VoteOption>
    {
        public VoteOptionList(IList<VoteOption> voteOptions) 
        : base(voteOptions)
        {

        }
    }
}