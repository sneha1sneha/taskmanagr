import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { TasklistadminComponent } from '@app/tasklistadmin/tasklistadmin.component';
import { RoleGuard } from '@app/auth/roleGuard';
const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [RoleGuard.forRoles(2)], data: { title: marker('Home') } },
    // { path: 'tasklistadmin', component: TasklistadminComponent,canActivate:[AuthenticationGuard], data: { title: marker('Tasklist') } },
    // { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule { }
