import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageWithSubpagesComponent } from './page-with-subpages/page-with-subpages.component';
import { SubPageOneComponent } from './sub-page-one/sub-page-one.component';
import { SubPageThreeComponent } from './sub-page-three/sub-page-three.component';
import { SubPageTwoComponent } from './sub-page-two/sub-page-two.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListPageComponent
  },
  {
    path: 'detail/:detailID',
    component: DetailComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'page-with-subpages',
    component: PageWithSubpagesComponent,
    children: [
      {
        path: 'sub-page-1',
        component: SubPageOneComponent
      },
      {
        path: 'sub-page-2',
        component: SubPageTwoComponent
      },
      {
        path: 'sub-page-3',
        component: SubPageThreeComponent
      }
    ]
  },
  {
    path: 'page-with-subpages-no-component',
    children: [
      {
        path: 'sub-page-1',
        component: SubPageOneComponent
      },
      {
        path: 'sub-page-2',
        component: SubPageTwoComponent
      },
      {
        path: 'sub-page-3',
        component: SubPageThreeComponent
      }
    ]
  },
  {
    path: 'i-dont-know',
    redirectTo: '/'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
