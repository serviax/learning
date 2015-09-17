using Microsoft.Owin;
using Owin;
using System.Web.Http;
using WebApi.Hal;

[assembly: OwinStartup(typeof(AngularGoogleMaps.Startup))]

namespace AngularGoogleMaps
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888

            //var config = new HttpConfiguration();
            //config.Formatters.Add(new JsonHalMediaTypeFormatter());
            //config.Formatters.Add(new XmlHalMediaTypeFormatter());

            //config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //  );

            //config.Routes.MapHttpRoute(
            //name: "Swagger",
            //routeTemplate: "api/swagger",
            //defaults: new
            //{
            //    controller = "Swagger",
            //    action = "Get",
            //});

            //var swaggerConfig = new SwaggerConfig();

            //config
            //    .EnableSwagger(c => c.SingleApiVersion("v1", "My own api"))
            //    .EnableSwaggerUi();

            //app.UseWebApi(config);

            //swaggerConfig.Register();

            //app.Run(Configure);
        }
        //private void ConfigureSwagger(SwaggerDocsConfig configuration)
        //{

        //    configuration.SingleApiVersion("v1", "My API");
        //    //configuration.IncludeXmlComments("bin\\AngularGoogleMaps.xml");
        //}

        ////private Task Configure(IOwinContext context)
        ////{
        ////    context.Response.ContentType = "plain/text"; ;
        ////    return context.Response.WriteAsync("Hello world");
        ////}
    }
}
