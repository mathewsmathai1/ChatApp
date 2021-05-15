import { Component } from '@angular/core';
import { MessageViewComponent } from './messages/message-view/message-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 // navList  : Array<string> = ['Home','SignUp','Login','MyChats'];
  title = 'chat-client';
  constructor()//public message : MessageViewComponent)
  {
    
  }
}
