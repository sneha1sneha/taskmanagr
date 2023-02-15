import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { RouteReusableStrategy, ApiPrefixInterceptor, ErrorHandlerInterceptor, SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HttpServiceWrapper } from "@shared/http-service/http-service";
import { TasklistModule } from './tasklist/tasklist.module';
import { TasklistadminModule } from './tasklistadmin/tasklistadmin.module';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdateadminModule } from './updateadmin/updateadmin.module';
import { AddtaskModule } from './addtask/addtask.module';
import { UpdatetaskModule } from './updatetask/updatetask.module';

import { HomeuComponent } from './homeu/homeu.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';

import { HomeuModule } from './homeu/homeu.module';
import { HeaderuserComponent } from './headeruser/headeruser.component';
import { TasklistUserComponent } from './tasklist-user/tasklist-user.component';
import { TasklistuserModule } from './tasklist-user/tasklist-user.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    NgbModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    TasklistadminModule,
    UpdateadminModule,
    TasklistModule,
    HomeuModule,
    AddtaskModule,
    UpdatetaskModule,
    AuthRoutingModule,
    TasklistuserModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, HeaderuserComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
    HttpServiceWrapper
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
