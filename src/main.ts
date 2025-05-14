import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
 import { AppComponent } from './app/app.component';
import { DataViewComponent } from './app/data-view/data-view.component';
import { provideRouter, } from '@angular/router';
import { routes } from './app/app.routes';

// bootstrapApplication(DataViewComponent, appConfig, {
//   providers: [provideRouter(routes)]
// })
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent,appConfig

).catch(err => console.error(err));
