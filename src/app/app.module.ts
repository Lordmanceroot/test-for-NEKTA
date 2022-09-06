import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AuthComponent} from './components/auth/auth.component';
import {DevicesListComponent} from './components/devices-list/devices-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FetchService} from "./services/fetch.service";
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from "./pipes/date.pipe";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DevicesListComponent,
    PageNotFoundComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
