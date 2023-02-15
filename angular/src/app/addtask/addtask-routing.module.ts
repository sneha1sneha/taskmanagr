
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { AddtaskComponent } from './addtask.component';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { RoleGuard } from '@app/auth/roleGuard';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'addtask', component: AddtaskComponent,canActivate: [RoleGuard.forRoles(2)], data: { title: marker('addTask') } },
    
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AddtaskRoutingModule { }



