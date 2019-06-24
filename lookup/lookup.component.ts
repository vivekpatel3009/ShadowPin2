import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthRights } from '../../auth/auth-rights';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { BroadcastService } from './../../service/datatransfer.service';
import { Router } from '@angular/router'
import { PopupMessageService } from './../../service/popupMessageService';
import swal from 'sweetalert2';
import { FilterPipe } from 'ngx-filter-pipe';
import { LookupService } from './lookup.service';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit 
{
 
  lookupList = [];

  currentstate:any;
  mode=AuthRights;
  objlookup:any;

  pageNo:number=1;
  pageSize:number=10;

  strsearch:any;
  totalNumberOfRecords:number;


  constructor(public authService:AuthService,public route:ActivatedRoute,private broadcastService:BroadcastService,private router:Router,private popupMessageService:PopupMessageService,private filter: FilterPipe,private lookupService:LookupService,private _LoggerService:LoggerService ) 
  {
    this.currentstate = this.route.snapshot.data;

    this.GetLookupList();
  }

  ngOnInit() 
  {        

  }    

  GetLookupList() 
  {
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/data/lookup_list.json`);
    // req.onload = () => 
    // {
    //   cb(JSON.parse(req.response));
    // };
    // req.send();
    
    this.lookupService.get(this.pageSize,this.pageNo).then((response:any) =>
    {
      if(response.Status == true)
      {
        this.lookupList=response.Data;
        this.totalNumberOfRecords=response.TotalNumberOfRecords;
      }
    });

    }
    

  editLookup(id)
  {
      this.objlookup = this.lookupList.filter(x => x.Id == id)[0];
      this.broadcastService.setobject(this.objlookup);
      this.router.navigate(['/master/lookup/edit']);
  }

    deleteLookup(id)
    {
      this.objlookup = this.lookupList.filter(x => x.Id == id)[0];
      this.objlookup.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.objlookup.objLoggerModel.ModuleRoute=this.router.url;

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
          this.lookupService.delete(this.objlookup).then((response:any) => 
            {
                  if(response.Status == true)
                  {
                    this.popupMessageService.openSuccessSwal('Deleted',response.Message);
                    this.GetLookupList();
                  }
                  else
                  {
                    this.popupMessageService.openWarningSwal('Fail','Lookup not deleted !');
                  }

                });
          }
      })
      
    }
    
  

  pagechange(value)
  {
    this.pageNo=value;
    this.GetLookupList();
  }

  pagesizechange(value)
  {
    this.pageSize=value;
    this.GetLookupList();
  }

 

}
