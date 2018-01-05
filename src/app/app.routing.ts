import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

const appRoutes: Routes = [
    {path: '', component: MainPageComponent, pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
    {path: 'dashboard', component: DashboardPageComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule {}
