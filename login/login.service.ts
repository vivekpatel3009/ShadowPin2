import { Injectable } from '@angular/core';
import { WebService } from '../../service/web.service'
import { AppGlobals } from '../../service/app.global';

@Injectable()
export class LoginService {
    constructor(public webService: WebService) { }
    loginUser(data) 
    {
        return this.webService.Post(data,'LoginAPI/Login' )
    }
}
