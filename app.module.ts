import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { AuthComponent } from './layouts/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { WebService } from './service/web.service';
import { AppGlobals } from './service/app.global';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './service/CommonService';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BroadcastService} from './service/datatransfer.service';
import { PopupMessageService} from './service/popupMessageService';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { LoggerService } from './service/logger.service';
import { LoginService  } from '../app/login/login.service';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TitleComponent,
    BreadcrumbsComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [AuthGuard,AuthService,WebService,AppGlobals,CommonService,{provide: LocationStrategy, useClass: HashLocationStrategy},BroadcastService,PopupMessageService,LoggerService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
