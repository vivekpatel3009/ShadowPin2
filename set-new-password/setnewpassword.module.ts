import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetNewPasswordComponent } from './setnewpassword.component';
import { SetNewPasswordRoutingModule} from './setnewpassword-routing.module';
import { SharedModule } from './../shared/shared.module';
import { SetNewPasswordService } from './setnewpassword.service';

@NgModule({
  imports: [
    CommonModule,
    SetNewPasswordRoutingModule,
    SharedModule
  ],
  declarations: [SetNewPasswordComponent],providers:[SetNewPasswordService]
})
export class SetNewPasswordModule { }
