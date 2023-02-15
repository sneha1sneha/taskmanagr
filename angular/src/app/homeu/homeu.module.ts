import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { HomeuRoutingModule } from './homeu-routing.module'; 
import { HomeuComponent } from './homeu.component';



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,HomeuRoutingModule,ReactiveFormsModule  ],
  declarations: [HomeuComponent],
})
export class HomeuModule {}
