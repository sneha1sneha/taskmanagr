import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { HeaderuserComponent } from './headeruser.component';



@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,HeaderuserModule,ReactiveFormsModule  ],
  declarations: [HeaderuserComponent]
})
export class HeaderuserModule {}
