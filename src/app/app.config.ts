import { APP_INITIALIZER, type ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { routes } from './app.routes';
import { AssetsService } from './services/assets.service';
import { MetaService } from './services/meta.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAngularSvgIcon(),
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [MetaService, AssetsService],
      useFactory:
        (metaService: MetaService, assetsService: AssetsService) =>
        async () => {
          await metaService.init();
          await assetsService.init();
        },
    },
  ],
};
