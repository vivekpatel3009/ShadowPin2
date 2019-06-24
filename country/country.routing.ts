import { NgModule } from "@angular/core";
import {RouterModule,Routes} from '@angular/router'
import {CountryComponent} from './country.component'

const routes :Routes = [
    {path:'', data:{state:'country',mode:'view'},component:CountryComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CountryRoutingModule{}