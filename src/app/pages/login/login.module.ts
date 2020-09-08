import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import * as firebaseui from 'firebaseui';
import {FirebaseUIModule, firebase} from 'firebaseui-angular';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: '',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/terms-of-service',
  privacyPolicyUrl: '/privacy-policy',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ]
})
export class LoginModule { }
