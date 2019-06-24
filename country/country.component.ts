import { Component, OnInit } from '@angular/core';
import { AuthRights } from '../../auth/auth-rights';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CountryService} from './country.service'
import { FilterPipe } from 'ngx-filter-pipe';
import { PopupMessageService } from './../../service/popupMessageService';
import swal from 'sweetalert2';
import { BroadcastService } from '../../service/datatransfer.service';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryList = [];

  currentstate:any;
  mode=AuthRights;
  objcountry:any;

  pageNo:number=1;
  pageSize:number=10;

  strsearch:any;
  totalNumberOfRecords:number;


  constructor(public authService:AuthService,public route:ActivatedRoute,private broadcastService:BroadcastService,private router:Router,private popupMessageService:PopupMessageService,private filter: FilterPipe,private countryService:CountryService,private _LoggerService:LoggerService ) 
  {
    this.currentstate = this.route.snapshot.data;

    this.GetCountryList();
  }

  ngOnInit() 
  {        

  }    

  GetCountryList() 
  {
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/data/lookup_list.json`);
    // req.onload = () => 
    // {
    //   cb(JSON.parse(req.response));
    // };
    // req.send();
    this.countryService.get(this.pageSize,this.pageNo).then((response:any) =>
    {
      if(response.Status == true)
      {
        this.countryList=response.Data;
        this.totalNumberOfRecords=response.TotalNumberOfRecords;
      }
    });

    }
    

    deleteCountry(id)
    {
      this.objcountry = this.countryList.filter(x => x.Id == id)[0];
      this.objcountry.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.objcountry.objLoggerModel.ModuleRoute=this.router.url;

       swal
      ({
        title: 'Are you sure?',
        text: 'You wont be able to revert',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result=>
      {
          if(result.value == true)
          {
          this.countryService.delete(this.objcountry).then((response:any) => 
            {
                  if(response.Status == true)
                  {
                    this.popupMessageService.openSuccessSwal('Deleted',response.Message);
                    this.GetCountryList();
                  }
                  else
                  {
                    this.popupMessageService.openWarningSwal('Fail','Country not deleted !');
                  }

                });
          }
      })
      
    }
    
  

  pagechange(value)
  {
    this.pageNo=value;
    this.GetCountryList();
  }

  pagesizechange(value)
  {
    this.pageSize=value;
    this.GetCountryList();
  }

 
}
