import { NgModule } from "@angular/core";
import {RouterModule,Routes} from '@angular/router'
import {LookupTypeComponent} from './lookup-type.component' 
import {ManageLookupTypeComponent} from './manage-lookup-type/manage-lookup-type.component' 

const routes: Routes = [
    {
      path: '',
      component: LookupTypeComponent,
      data: 
      {
        state: 'lookuptype',
        mode:'view'
      }
    },
    {path:'add',
    data: 
    {
      state: 'lookuptype',
      mode:'create'
    },
    component:ManageLookupTypeComponent},
    {path:'edit',data: 
    {
      state: 'lookuptype',
      mode:'edit'
    },
    component:ManageLookupTypeComponent}
  ];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LookupTypeRoutingModule{}