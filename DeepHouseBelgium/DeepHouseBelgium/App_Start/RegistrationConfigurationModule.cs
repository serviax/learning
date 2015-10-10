using DeepHouseBelgium.Controllers;
using Ninject.Modules;

namespace DeepHouseBelgium.App_Start
{
    public class RegistrationConfigurationModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IVoteProvider>().To<VoteProvider>();
        }
    }
}