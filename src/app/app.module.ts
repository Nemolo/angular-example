import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { HelloWorldNgifComponent } from './hello-world-ngif/hello-world-ngif.component';
import { ListElementComponent } from './list-element/list-element.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { DoubleWayComponent } from './double-way/double-way.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    HelloWorldNgifComponent,
    ListElementComponent,
    ListContainerComponent,
    DoubleWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
