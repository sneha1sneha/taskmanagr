import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { AddtaskRoutingModule } from './addtask-routing.module';
import { AddtaskComponent } from './addtask.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, AddtaskRoutingModule, ReactiveFormsModule],
  declarations: [AddtaskComponent],
})
export class AddtaskModule { }

