import { bootstrap }    from '@angular/platform-browser-dynamic';

import { HTTP_PROVIDERS } from '@angular/http';

import { FizzBuzzItemComponent } from './fizz-buzz-item.component';

bootstrap(FizzBuzzItemComponent, [HTTP_PROVIDERS]);