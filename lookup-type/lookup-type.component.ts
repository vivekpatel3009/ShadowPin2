import { Component, OnInit } from '@angular/core';
import { AuthRights } from '../../auth/auth-rights';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { BroadcastService } from './../../service/datatransfer.service';
import { Router } from '@angular/router'
import { PopupMessageService } from './../../service/popupMessageService';
import { FilterPipe } from 'ngx-filter-pipe';
import { LookupTypeService } from './lookup-type.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-lookup-type',
  templateUrl: './lookup-type.component.html',
  styleUrls: ['./lookup-type.component.scss']
})
export class LookupTypeComponent implements OnInit 
{

  lookupTypeList = [];

  currentstate:any;
  mode=AuthRights;
  objlookupType:any;

  pageNo:number=1;
  pageSize:number=10;

  strsearch:any;
  totalNumberOfRecords:number;


  constructor(public authService:AuthService,public router:ActivatedRoute,private broadcastService:BroadcastService,private route:Router,private popupMessageService:PopupMessageService,private filter: FilterPipe,private lookuTypeService:LookupTypeService ) 
  {
    this.currentstate = this.router.snapshot.data;

    this.GetLookupTypeList((data) => 
    {
      this.lookupTypeList = data;
    });
  }
  ngOnInit() 
  {        

  }    

  GetLookupTypeList(cb) 
  {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/lookup-type_list.json`);
    req.onload = () => 
    {
      cb(JSON.parse(req.response));
    };
    req.send();
    
    // this.lookuTypeService.get(this.pageSize,this.pageNo).then((response:any) =>
    // {
    //   debugger;
    //   if(response.Status == true)
    //   {
    //     this.lookupTypeList=response.Data;
    //     this.totalNumberOfRecords=response.TotalNumberOfRecords;
    //   }
    // });

    }
    

  editLookupType(id)
  {
      this.objlookupType = this.lookupTypeList.filter(x => x.Id == id)[0];
      this.broadcastService.setobject(this.objlookupType);
      this.route.navigate(['/master/lookuptype/edit']);
  }

    deleteLookupType(id)
    {
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
          this.lookuTypeService.delete(id).then((response:any) => 
            {
                  if(response.Status == true)
                  {
                    this.popupMessageService.openSuccessSwal('Created',response.Message);
                  }
                  else
                  {
                    this.popupMessageService.openWarningSwal('Fail','Lookup Type not deleted !');
                  }

                });
          }
      })
      
    }
    
  

  pagechange(value)
  {
    this.pageNo=value;
    this.GetLookupTypeList((data) => 
    {
      this.lookupTypeList = data;
    });
}

  pagesizechange(value)
  {
    this.pageSize=value;
    this.GetLookupTypeList((data) => 
    {
      this.lookupTypeList = data;
    });
  }

}
