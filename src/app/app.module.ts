import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './app.materials';
import { BlockUIModule } from 'ng-block-ui';
import { HttpModule } from '@angular/http';

import { UsersBackendService } from './services/users-backend.service';

import { AppComponent } from './components/app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    BlockUIModule,
    HttpModule,
  ],
  providers: [
    UsersBackendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
