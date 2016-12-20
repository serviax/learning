import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { KerstApp } from './quiz';

platformBrowserDynamic().bootstrapModule(KerstApp)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
