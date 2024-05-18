import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { DialogService } from './modules/UI/dialog/services/dialog.service';
import { CommonDialogService } from './modules/UI/dialog-common/services/common-dialog.service';
import { DialogRegistryService } from './modules/UI/dialog/services/dialog-registry.service';
import { DialogViewportRulerService } from './modules/UI/dialog/services/dialog-viewport-ruler.service';
import { Overlay } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    DialogService,
    CommonDialogService,
    DialogRegistryService,
    DialogViewportRulerService,
    PortalModule,
    Overlay
  ],
};
