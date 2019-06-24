import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetNewPasswordService } from './setnewpassword.service';
import { ActivatedRoute, Router } from '@angular/router'
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-setnewpassword',
  templateUrl: './setnewpassword.component.html'
})
export class SetNewPasswordComponent implements OnInit 
{
  public forgotpasswordform: FormGroup;
  emailid:string='';
  public jsonresponse:any;

  objuser:any;

  constructor(private loginFormBuilder: FormBuilder,private _SetNewPasswordService:SetNewPasswordService, private route: ActivatedRoute,private _LoggerService:LoggerService,private router:Router ) 
  { 
    this.objuser=
    {
          Password:'',
          ConfirmPassword:'',
          PasswordToken:'',
          objLoggerModel:{}
    }
      
  }

  onSubmit(data:any)
  {
        if(data.ConfirmPassword == data.Password)
        {
            this.objuser.Password = data.Password;
            this.objuser.PasswordToken= this.route.snapshot.params['token'];
            
            this.objuser.objLoggerModel.EmailId='';
            this.objuser.objLoggerModel.MacAddress='';
            this.objuser.objLoggerModel.IPAddress='';
            this.objuser.objLoggerModel.ModuleRoute=this.router.url;

            this._SetNewPasswordService.setnewpassword(this.objuser).then(response=>
            {
                this.jsonresponse=response;

                if(this.jsonresponse.Status == true)
                {
                    alert(this.jsonresponse.Message);
                }
                else
                {
                    console.log(response);
                }
                    
            },
            error=>
            {
                console.log(error);
            });

        }
        else
        {
            alert('password does not match !');
        }
    
  }
    

  ngOnInit() 
  {
      this.forgotpasswordform = this.loginFormBuilder.group({
        newpassword: ['', Validators.required],
        confirmpassword: ['', Validators.required]
      })

     
  }

}

export interface IUser
{
    Password:string;
    PasswordToken:string;
    ConfirmPassword:string;
}
