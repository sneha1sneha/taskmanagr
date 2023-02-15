import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { UpdatetaskComponent } from './updatetask.component'; 
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'updatetask/:id', component: UpdatetaskComponent ,canActivate:[AuthenticationGuard], data: { title: marker('Updatetask') } },
    // { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UpdatetaskRoutingModule {

}
