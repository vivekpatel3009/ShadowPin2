import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contactus.component';
import { ContactUsRoutingModule } from './contactus-routing';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
