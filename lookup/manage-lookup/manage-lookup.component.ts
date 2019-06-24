import { Component, Input, OnInit, EventEmitter, Output,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LookupService } from '../lookup.service';
import { ILookupModel } from '../lookup.model';
import { BroadcastService } from '../../../service/datatransfer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PopupMessageService } from '../../../service/popupMessageService';
import { ILoggerModel } from '../../../model/logger.model';
import { LoggerService } from '../../../service/logger.service';

@Component({
  selector: 'app-manage-lookup',
  templateUrl: './manage-lookup.component.html',
  styleUrls: ['./manage-lookup.component.scss']
})
export class ManageLookupComponent implements OnInit 
{
  submited = false;
  public lookup: ILookupModel;

  public lookupForm: FormGroup;

  pageTitle:string='';
  objLoggerModel:ILoggerModel

  constructor(private formBuilder: FormBuilder, private lookupService: LookupService, private broadcastService: BroadcastService ,private activatedRoute:ActivatedRoute,private router:Router,private popupMessageService:PopupMessageService,private _LoggerService:LoggerService) 
  {
    debugger;
    this.lookup =
    ({
        Id: 0,
        Name: '',
        LookupType: '',
        FullName: '',
        DisplayName: '',
        DisplayOrdering: '',
        IsActive: true
      });

    this.lookupForm = this.formBuilder.group
      ({
        Id: [this.lookup.Id],
        Name: [this.lookup.Name, [Validators.required]],
        LookupType: [this.lookup.LookupType,[Validators.required]],
        FullName: [this.lookup.FullName, [Validators.required]],
        DisplayName: [this.lookup.DisplayName, [Validators.required]],
        DisplayOrdering: [this.lookup.DisplayOrdering, [Validators.required]],
        IsActive: [this.lookup.IsActive]
      });
      

     this.checkeditedobject();
    
  }


  public DDList =
    [
      { item_id: 1, item_text: 'Lookup type 1' },
      { item_id: 2, item_text: 'Lookup type 2' },
      { item_id: 3, item_text: 'Lookup type 3' },
      { item_id: 4, item_text: 'Lookup type 4' },
      { item_id: 5, item_text: 'Lookup type 5' },
      { item_id: 6, item_text: 'Lookup type 6' },
      { item_id: 7, item_text: 'Lookup type 7' },
      { item_id: 8, item_text: 'Lookup type 8' },
      { item_id: 9, item_text: 'Lookup type 9' },
      { item_id: 10, item_text: 'Lookup type 10' },
    ];

    checkeditedobject()
    {
      let operationType: any = this.activatedRoute.data;

      if(operationType.value.mode == 'edit')
      {
          this.pageTitle= 'Edit Lookup'

          this.lookup = this.broadcastService.getobject();

          if(this.lookup != undefined && this.lookup.Id > 0)
          {
            this.lookupForm.patchValue(this.lookup);
          }
          else
          {
            this.router.navigate(['/master/lookup']);
          }
      }
      else
      {
        this.pageTitle= 'Add Lookup'
      }
    }

  ngOnInit() 
  {
      
  }

  ngOnDestroy()
  {
    this.broadcastService.clearobject();
  }

  onSubmitClick(objlookup: any) 
  {
    this.submited = true;

    if (this.lookupForm.valid) 
    {
      this.lookup = this.lookupForm.value;
      this.lookup.objLoggerModel = this._LoggerService.GetLoggerDetails();
      this.lookup.objLoggerModel.ModuleRoute=this.router.url;
      
      if (this.lookup.Id == 0) 
      {
        this.lookupService.create(this.lookup).then((response:any) => 
        {
          if(response.Status == true)
          {
            this.popupMessageService.openSuccessSwal('Created',response.Message);
            this.router.navigate(['/master/lookup']);
          }else
          {
            this.popupMessageService.openWarningSwal('Fail','Lookup not created !');
          }

        });
      }
      else 
      {
        
        this.lookupService.update(this.lookup).then((response:any) => 
        {
          if(response.Status == true)
          {
            this.popupMessageService.openSuccessSwal('Updated',response.Message);
            this.router.navigate(['/master/lookup']);
          }else
          {
            this.popupMessageService.openWarningSwal('Fail','Lookup not updated !');
          }
        });

      }

    }
  }


}
