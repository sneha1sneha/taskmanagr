import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HeaderuserComponent } from './headeruser.component';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { TasklistComponent } from '@app/tasklist/tasklist.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HeaderuserRoutingModule {

}
