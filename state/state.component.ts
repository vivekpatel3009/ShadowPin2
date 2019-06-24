import { Component, OnInit } from '@angular/core';
import { AuthRights } from '../../auth/auth-rights';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from './state.service';
import { FilterPipe } from 'ngx-filter-pipe';
import { PopupMessageService } from '../../service/popupMessageService';
import { BroadcastService } from '../../service/datatransfer.service';
import swal from 'sweetalert2';
import { LoggerService } from '../../service/logger.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit 
{
  stateList = [];

  currentstate:any;
  mode=AuthRights;
  objstate:any;

  pageNo:number=1;
  pageSize:number=10;

  strsearch:any;
  totalNumberOfRecords:number;


  constructor(public authService:AuthService,public router:Router,private broadcastService:BroadcastService,private route:ActivatedRoute,private popupMessageService:PopupMessageService,private filter: FilterPipe,private stateService:StateService,private _LoggerService:LoggerService ) 
  {
    this.currentstate = this.route.snapshot.data;

    this.GetStateList();
  }

  ngOnInit() 
  {        

  }    

  GetStateList() 
  {
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/data/lookup_list.json`);
    // req.onload = () => 
    // {
    //   cb(JSON.parse(req.response));
    // };
    // req.send();
    this.stateService.get(this.pageSize,this.pageNo,0).then((response:any) =>
    {
      if(response.Status == true)
      {
        this.stateList=response.Data;
        this.totalNumberOfRecords=response.TotalNumberOfRecords;
      }
    });

    }
    

    deleteState(id)
    {
      debugger;
      this.objstate = this.stateList.filter(x => x.Id == id)[0];
      this.objstate.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.objstate.objLoggerModel.ModuleRoute=this.router.url;
      
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
          this.stateService.delete(this.objstate).then((response:any) => 
            {
                  if(response.Status == true)
                  {
                    this.popupMessageService.openSuccessSwal('Deleted',response.Message);
                    this.GetStateList();
                  }
                  else
                  {
                    this.popupMessageService.openWarningSwal('Fail','State not deleted !');
                  }

                });
          }
      })
      
    }
    
  

  pagechange(value)
  {
    this.pageNo=value;
    this.GetStateList();
  }

  pagesizechange(value)
  {
    this.pageSize=value;
    this.GetStateList();
  }


}
