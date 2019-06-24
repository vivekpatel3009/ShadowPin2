import { Injectable } from '@angular/core';
import { WebService } from './../service/web.service'
import { AppGlobals } from './../service/app.global';

@Injectable()

export class SetNewPasswordService 
{
    constructor(public webService: WebService) { }

    setnewpassword(data) 
    {
        return this.webService.PostWithoutHeader(data, 'ClientMasterAPI/SetNewPassword')
    }

}
