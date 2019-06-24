import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common'
import {SharedModule} from '../../shared/shared.module'
import {LookupTypeComponent} from './lookup-type.component'
import {LookupTypeRoutingModule} from './lookup-type.routing';
import { ManageLookupTypeComponent } from './manage-lookup-type/manage-lookup-type.component';
import{ LookupTypeService} from './lookup-type.service';

@NgModule({
    declarations:[LookupTypeComponent, ManageLookupTypeComponent],
    imports:[CommonModule,SharedModule,LookupTypeRoutingModule],
    providers:[LookupTypeService]
})

export class LookupTypeModule{}