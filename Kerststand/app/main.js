"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var quiz_1 = require('./quiz');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(quiz_1.KerstApp)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map