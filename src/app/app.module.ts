import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageViewComponent } from './messages/message-view/message-view.component';
const routes : Routes = [
  {path: 'Home', component : HomeComponent , outlet: 'navPages'},
    {path: 'SignUp', component : SignUpComponent , outlet: 'navPages' },  //outlet: 'navPageSignUp' }
    {path: 'MyChats', component : MessageViewComponent , outlet: 'navPages' }
 ];
@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)//, {useHash: true})
  ],
  providers: [{provide: MessageViewComponent, useClass:MessageViewComponent}],
  bootstrap: [AppComponent]
})
export class AppModule { }
