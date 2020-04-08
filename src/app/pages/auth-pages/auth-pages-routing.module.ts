import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      title: 'Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPagesRoutingModule {
}
