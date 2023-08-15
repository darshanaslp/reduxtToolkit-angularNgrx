import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorModule } from './author/author.module';
import { SharedServiceService } from './shared-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptorService } from './http-error-interceptor.service';

import { StoreModule } from '@ngrx/store';
import { authorReducer } from './author/ngrx/author.reducer'; // Import and configure your root reducers
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthorModule,
    StoreModule.forRoot(authorReducer), // Configure the root store
    EffectsModule.forRoot([]), // Add your root effects if any
  ],
  providers: [
    SharedServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
