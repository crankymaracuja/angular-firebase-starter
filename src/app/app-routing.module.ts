import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { path: 'terms-of-service', loadChildren: () => import('./pages/terms-of-service/terms-of-service.module').then(m => m.TermsOfServiceModule) },
  { path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
