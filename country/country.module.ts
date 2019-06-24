import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module'

import {CountryComponent} from './country.component'
import {CountryRoutingModule} from './country.routing'
import {CountryService} from './country.service'

@NgModule({
    imports:[CommonModule,SharedModule,CountryRoutingModule],
    declarations:[CountryComponent],
    providers:[CountryService]
})

export class CountryModule{}
