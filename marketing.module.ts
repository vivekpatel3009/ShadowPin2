import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketingRoutingModule} from './marketing-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MarketingRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class MarketingModule { }
