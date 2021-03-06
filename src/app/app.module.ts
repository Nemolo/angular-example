import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { ListElementComponent } from './list-element/list-element.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { DoubleWayComponent } from './double-way/double-way.component';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';
import { PageWithSubpagesComponent } from './page-with-subpages/page-with-subpages.component';
import { SubPageOneComponent } from './sub-page-one/sub-page-one.component';
import { SubPageTwoComponent } from './sub-page-two/sub-page-two.component';
import { SubPageThreeComponent } from './sub-page-three/sub-page-three.component';
import { DetailComponent } from './detail/detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LayoutModule } from './layout/layout.module';
import { MyHttpInterceptor } from './my-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    HelloWorldNgifComponent,
    ListElementComponent,
    ListContainerComponent,
    DoubleWayComponent,
    HomeComponent,
    ListPageComponent,
    PageWithSubpagesComponent,
    SubPageOneComponent,
    SubPageTwoComponent,
    SubPageThreeComponent,
    DetailComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
