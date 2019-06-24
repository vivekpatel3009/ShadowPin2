import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
    {
        path: '',
        data:
        {
            state:'master',
            mode:'main'
        },
        children:[
                    {path:'time-zone',loadChildren:'./time-zone/time-zone.module#TimeZoneModule'},
                    {path:'country',loadChildren:'./country/country.module#CountryModule'},
                    {path:'state',loadChildren:'./state/state.module#StateModule'},
                    {path:'city',loadChildren:'./city/city.module#CityModule'},
                    {path:'lookuptype',loadChildren:'./lookup-type/lookup-type.module#LookupTypeModule'},
                    {path:'lookup',loadChildren:'./lookup/lookup.module#LookupModule'}
                 ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MasterRoutingModule { }