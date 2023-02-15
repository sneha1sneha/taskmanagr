import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { TasklistuserRoutingModule } from './tasklist-user-routing.module';
import { TasklistUserComponent } from './tasklist-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, TasklistuserRoutingModule, BrowserModule, AgGridModule ],
  declarations: [TasklistUserComponent],
})
export class TasklistuserModule {}
