using WebApi.Hal;

namespace DeepHouseBelgium.Models
{
    public class VoteOption : Representation
    {
        public override string Rel
        {
            get
            {
                return "VoteOption";
            }
        }

        public string Name { get; set; }

        public string Id { get; set; }

        public int Count { get; set; }
    }
}