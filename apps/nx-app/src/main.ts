import {bootstrapApplication} from '@angular/platform-browser'
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router'
import {AppComponent} from './app/app.component'
import {appRoutes} from './app/app.routes'
import {provideStore, provideState} from '@ngrx/store'
import {provideEffects} from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core'

bootstrapApplication(AppComponent, {
  providers: [provideEffects(), provideStore(), provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), importProvidersFrom(BrowserAnimationsModule)],
}).catch(err => console.error(err))
