import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { TasklistRoutingModule } from './tasklist-routing.module';
import { TasklistComponent } from './tasklist.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, TasklistRoutingModule, BrowserModule, AgGridModule ],
  declarations: [TasklistComponent],
})
export class TasklistModule {}
