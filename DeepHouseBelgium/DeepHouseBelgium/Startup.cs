using DeepHouseBelgium.App_Start;
using Microsoft.Owin;
using Microsoft.Practices.ServiceLocation;
using Ninject;
using Owin;

[assembly: OwinStartup(typeof(DeepHouseBelgium.Startup))]

namespace DeepHouseBelgium
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

            //IKernel kernel = new StandardKernel(new RegistrationConfigurationModule());
            //System.Web.Http.GlobalConfiguration.Configuration.DependencyResolver = new Ninject.WebApi.DependencyResolver.NinjectDependencyResolver(kernel);
        }
    }
}
