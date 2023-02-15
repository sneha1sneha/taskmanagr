import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeuComponent } from './homeu/homeu.component';
import { AuthenticationGuard } from './auth';
import { TasklistComponent } from './tasklist/tasklist.component';
const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
