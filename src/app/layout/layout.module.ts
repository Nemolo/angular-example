import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouterModule } from '@angular/router';
import { NavbarElemComponent } from './components/navbar-elem/navbar-elem.component';

@NgModule({
  declarations: [
    NavigationComponent,
    LogoutComponent,
    NavbarElemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    LogoutComponent
  ]
})
export class LayoutModule { }
