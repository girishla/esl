import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { EslAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(EslAppComponent);

