import { Injectable } from '@angular/core';
import { WebService } from '../../service/web.service'
import { AppGlobals } from '../../service/app.global';

@Injectable()
export class CountryService 
{
    constructor(public webService: WebService) { }

    create(data) 
    {
        return this.webService.Post(data,'CountryAPI/Create' );
    }

    update(data) 
    {
        return this.webService.Put(data,'CountryAPI/Update');
    }

    delete(data) 
    {
        return this.webService.Delete(data,'CountryAPI/Delete');
    }
    
    get(pagesize,pagenumber) 
    {
        return this.webService.Get('CountryAPI/GetList?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'');
    }

}
