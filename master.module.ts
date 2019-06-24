import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SharedModule} from '../shared/shared.module'
import {MasterRoutingModule} from './master.routing'

import {MasterComponent} from './master.component';

@NgModule({
    imports:[CommonModule,SharedModule,MasterRoutingModule],
    declarations:[MasterComponent]
})

export class MasterModule {}