import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { TasklistadminRoutingModule } from './tasklistadmin-routing.module';
import { TasklistadminComponent } from './tasklistadmin.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, TasklistadminRoutingModule, BrowserModule, AgGridModule ],
  declarations: [TasklistadminComponent],
})
export class TasklistadminModule {}
