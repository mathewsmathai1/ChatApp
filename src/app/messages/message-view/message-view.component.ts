import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {

  dummyArray : Array<string> = ["1","2","1","2"];
  isTrue : number  = 0;
  constructor() { 
    this.dummyArray = ["1","2","1","2"];
  }

  ngOnInit(): void {
  }

}
