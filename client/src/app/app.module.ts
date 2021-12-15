// <!-- COMP229 - Fall 2021 - - Sec 09
// Group - 13
// WEbExpert -->

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AuthGuard } from "./pages/auth/auth.guard";
import { AuthModule } from "./pages/auth/auth.module";
import { PartialsModule } from './partials/partials.module';
import { AboutComponent} from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PartialsModule,
    PagesModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
