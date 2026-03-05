import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
// for two way binding FormsModule is neccessary otherwise it will through error
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import {  HttpClientModule } from '@angular/common/http';

//tells browser to load components, directives, and pipes (declarables)
//Angular module
@NgModule({
  //The set of components, directives, and pipes (declarables) that belong to this module.
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  //The set of NgModules whose exported declarables are available to templates in this module.
  imports: [
    BrowserModule,
    AppRoutingModule,
    // for two way binding it is neccessary
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
