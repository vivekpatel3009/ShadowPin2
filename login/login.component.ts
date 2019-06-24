import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { json } from 'd3';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public Login: login;
    public loginResponse:any;
    public loginForm: FormGroup;
    submitted:any;
    constructor(private loginFormBuilder: FormBuilder, public router: Router,private _LoginService:LoginService) 
    { 
        this.Login = new login();
    }

    ngOnInit() 
    {
        this.loginForm = this.loginFormBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
        })
    }

    onLoggedin() 
    {
        sessionStorage.setItem('isLoggedin','true');
        this.router.navigate(['/dashboard']);
        
        // this._LoginService.loginUser(this.Login).subscribe(response=>
        // {
        //     this.loginResponse=response;

        //     if(this.loginResponse.Data.length == 0)
        //     {
        //         alert(this.loginResponse.Message);
        //     }
        //     else
        //     {
        //         this.loginResponse=response;
        //         sessionStorage.setItem('isLoggedin','true');
        //         this.router.navigate(['/dashboard']);
        //     }
                
        // },
        // error=>
        // {
        //     console.log(error);
        // });
    
    }
    
}

export class login 
{
email: string;
password: string;
}