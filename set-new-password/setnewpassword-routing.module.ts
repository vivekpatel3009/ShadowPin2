import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetNewPasswordComponent} from './setnewpassword.component';

const routes: Routes = [
  {
    path: '',
    component: SetNewPasswordComponent,
    data: {
      title: 'SetNewPassword'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetNewPasswordRoutingModule { }
