using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using WebApi.Hal;
using Ninject;
using DeepHouseBelgium.App_Start;

namespace DeepHouseBelgium
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            GlobalConfiguration.Configuration.Formatters.Add(new JsonHalMediaTypeFormatter());
            //GlobalConfiguration.Configuration.Formatters.Add(new XmlHalMediaTypeFormatter());


            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
