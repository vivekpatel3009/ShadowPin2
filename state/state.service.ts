import { Injectable } from '@angular/core';
import { WebService } from '../../service/web.service'
import { AppGlobals } from '../../service/app.global';

@Injectable()
export class StateService 
{
    constructor(public webService: WebService) { }

    create(data) 
    {
        return this.webService.Post(data,'ProvinceAPI/Create' );
    }

    update(data) 
    {
        return this.webService.Put(data,'ProvinceAPI/Update');
    }

    delete(data) 
    {
        return this.webService.Delete(data,'ProvinceAPI/Delete');
    }
    
    get(pagesize,pagenumber,countryid) 
    {
        return this.webService.Get('ProvinceAPI/GetList?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'&CountryId='+countryid+'');
    }
   

}
