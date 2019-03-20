import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { fromEventPattern } from 'rxjs';
import { LogComponent } from './log/log.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
