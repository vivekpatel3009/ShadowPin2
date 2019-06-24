import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { BroadcastService } from '../../../service/datatransfer.service';
import { LoggerService } from '../../../service/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupMessageService } from '../../../service/popupMessageService';
import { LookupTypeService } from '../lookup-type.service';

@Component({
  selector: 'app-manage-lookup-type',
  templateUrl: './manage-lookup-type.component.html',
  styleUrls: ['./manage-lookup-type.component.scss']
})
export class ManageLookupTypeComponent implements OnInit 
{
  lookupTypeForm:FormGroup;
  submited = false;
  TypeName:string;
  lookuptype:any;

  
  pageTitle:string='';

  constructor(private formBuilder: FormBuilder, private broadcastService: BroadcastService ,private activatedRoute:ActivatedRoute,private router:Router,private popupMessageService:PopupMessageService,private lookupTypeService:LookupTypeService,private _LoggerService:LoggerService) 
  { 
    this.lookuptype =
    ({
      Id: 0,
      TypeName: ''
    });

    this.lookupTypeForm = this.formBuilder.group
    ({
      Id:[this.lookuptype.Id],
      TypeName:[this.lookuptype.TypeName,[Validators.required]]
    })

    this.checkeditedobject();
  }

  ngOnInit() 
  {
   
  }

  checkeditedobject()
  {
    let operationType: any = this.activatedRoute.data;

    if(operationType.value.mode == 'edit')
    {
        this.pageTitle= 'Edit Lookup Type'

        this.lookuptype = this.broadcastService.getobject();

        if(this.lookuptype != undefined && this.lookuptype.Id > 0)
        {
          this.lookupTypeForm.setValue(this.lookuptype);
        }
        else
        {
          this.router.navigate(['/master/lookuptype']);
        }
    }
    else
    {
      this.pageTitle= 'Add Lookup Type'
    }
  }

  onSubmitClick() 
  {
    this.submited = true;

    if (this.lookupTypeForm.valid) 
    {
      this.lookuptype = this.lookupTypeForm.value;
      this.lookuptype.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.lookuptype.objLoggerModel.ModuleRoute=this.router.url;

      if (this.lookuptype.Id == 0) 
      {
        this.lookupTypeService.create(this.lookuptype).then(response => 
        {
          this.popupMessageService.openSuccessSwal('Created',"Lookup Type created successfully");
        this.router.navigate(['/master/lookuptype']);
        });
      }
      else 
      {
        
        this.lookupTypeService.update(this.lookuptype).then(response => 
        {
          this.popupMessageService.openSuccessSwal('Updated',"Lookup Type updated successfully");
          this.router.navigate(['/master/lookuptype']);
        });

      }

    }
  }

  ngOnDestroy()
  {
    this.broadcastService.clearobject();
  }

}
