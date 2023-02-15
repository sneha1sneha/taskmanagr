
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { TasklistComponent } from './tasklist.component';
import { RoleGuard } from '@app/auth/roleGuard';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'tasklist', component: TasklistComponent, canActivate: [RoleGuard.forRoles(1)], data: { title: marker('Tasklist') } },
    // { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TasklistRoutingModule {

}
