import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common'
import {SharedModule} from '../../shared/shared.module'

import {StateComponent} from './state.component'
import {StateRoutingModule} from './state.routing'
import {StateService} from './state.service'
@NgModule({
    declarations:[StateComponent],
    imports:[CommonModule,SharedModule,StateRoutingModule],
    providers:[StateService]
})

export class StateModule{}