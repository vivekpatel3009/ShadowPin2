import { Injectable } from '@angular/core';
import { WebService } from '../../service/web.service'
import { AppGlobals } from '../../service/app.global';

@Injectable()
export class LookupTypeService 
{
    constructor(public webService: WebService) { }

    create(data) 
    {
        return this.webService.Post(data,'LookupTypeAPI/Post' );
    }

    update(data) 
    {
        return this.webService.Put(data,'LookupTypeAPI/Put');
    }

    delete(data) 
    {
        return this.webService.Delete(data,'LookupAPI/Delete');
    }

    get(pagesize,pagenumber) 
    {
        return this.webService.Get('LookupTypeAPI/GetList?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'');
    }

}
