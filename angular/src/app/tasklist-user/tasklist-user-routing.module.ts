import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { TasklistUserComponent } from './tasklist-user.component';
import { RoleGuard } from '@app/auth/roleGuard';

const routes: Routes = [
    Shell.childRoutes([
        { path: '', redirectTo: '', pathMatch: 'full' },
        { path: 'tasklistuser', component: TasklistUserComponent,  data: { title: marker('Tasklist') } },
        // { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
    ]),
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class TasklistuserRoutingModule {

}
