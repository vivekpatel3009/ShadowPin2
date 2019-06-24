import { NgModule } from "@angular/core";
import {RouterModule,Routes} from '@angular/router'
import {LookupComponent} from './lookup.component' 
import {ManageLookupComponent} from './manage-lookup/manage-lookup.component' 
const routes: Routes = [
    {
      path: '',
      data:{state:'lookup',mode:'view'},
      component: LookupComponent,
    },
    {path:'add',data:{state:'lookup',mode:'create'},component:ManageLookupComponent},
    {path:'edit',data:{state:'lookup',mode:'edit'},component:ManageLookupComponent}
  ];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LookupRoutingModule{}