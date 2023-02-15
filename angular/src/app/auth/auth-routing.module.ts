import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '@app/auth/register/register.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { HomeuComponent } from '@app/homeu/homeu.component';
import { TasklistComponent } from '@app/tasklist/tasklist.component';
import { UpdatetaskComponent } from '@app/updatetask/updatetask.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: marker('Login') } },
  { path: 'register', component: RegisterComponent, data: { title: marker('register') } },
  { path: 'Homeuser', component: HomeuComponent,canActivate:[AuthenticationGuard], data: { title: marker('Homeuser') } },
  { path: 'tasklist', component: TasklistComponent,canActivate:[AuthenticationGuard],data: { title: marker('Tasklist') }  },
  // { path: 'updatetask/:id', component: UpdatetaskComponent ,canActivate:[AuthenticationGuard], data: { title: marker('Updatetask') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
