import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CompOneComponent,
    CompTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
