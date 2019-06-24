import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common'
import {SharedModule} from '../../shared/shared.module'
import{ LookupService } from './lookup.service';
import {LookupComponent} from './lookup.component'
import {LookupRoutingModule} from './lookup.routing';
import { ManageLookupComponent } from './manage-lookup/manage-lookup.component'

@NgModule({
    declarations:[LookupComponent, ManageLookupComponent],
    imports:[CommonModule,SharedModule,LookupRoutingModule],
    providers:[LookupService]
})

export class LookupModule{}