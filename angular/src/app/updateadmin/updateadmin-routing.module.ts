import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { UpdateadminComponent } from './updateadmin.component'; 
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { RoleGuard } from '@app/auth/roleGuard';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'updateadmin/:id', component: UpdateadminComponent ,canActivate: [RoleGuard.forRoles(2)], data: { title: marker('Updatetask') } },
    // { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UpdateadminRoutingModule {

}