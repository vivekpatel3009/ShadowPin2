import { Injectable } from '@angular/core';
import { WebService } from '../../service/web.service'
import { AppGlobals } from '../../service/app.global';

@Injectable()
export class LookupService 
{
    constructor(public webService: WebService) { }

    get(pagesize,pagenumber) 
    {
        return this.webService.Get('LookupAPI/GetList?PageSize='+ pagesize +'&PageNumber='+ pagenumber +'');
    }

    create(data) 
    {
        return this.webService.Post(data,'LookupAPI/Post' );
    }

    update(data) 
    {
        return this.webService.Put(data,'LookupAPI/Put');
    }

    delete(data) 
    {
        return this.webService.Delete(data,'LookupAPI/Delete');
    }

}
