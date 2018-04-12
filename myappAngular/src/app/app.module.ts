import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageService } from './services/page.service';
import { PagesComponent } from './pages/pages.component';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path : 'register', component : RegisterComponent},
    {path : 'login', component : LoginComponent},
    {path : '', component : PagesComponent},
    {path : ':page', component : PagesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PageService,
    UserService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
