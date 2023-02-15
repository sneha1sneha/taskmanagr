import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { UpdatetaskRoutingModule } from './updatetask-routing.module'; 
import { UpdatetaskComponent } from './updatetask.component'; 



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,UpdatetaskRoutingModule,ReactiveFormsModule  ],
  declarations: [UpdatetaskComponent],
})
export class UpdatetaskModule {}
