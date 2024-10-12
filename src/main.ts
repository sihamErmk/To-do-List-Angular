import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClientModule

enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Add the HttpClient provider
  ]
})
.catch(err => console.error(err));
