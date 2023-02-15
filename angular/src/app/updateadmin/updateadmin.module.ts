import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { UpdateadminRoutingModule } from './updateadmin-routing.module'; 
import { UpdateadminComponent } from './updateadmin.component'; 



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,UpdateadminRoutingModule,ReactiveFormsModule  ],
  declarations: [UpdateadminComponent],
})
export class UpdateadminModule {}
