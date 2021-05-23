import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageViewComponent implements OnInit {

  dummyArray : Array<string> = ["1","2",
                                "1","2",
                                "1","2",
                                "1","2"];
  dummyText  : Array<string> = ["message 1","message 2",
                                "message 3","message 4",
                                "message 5","message 6",
                                "message 7","message 8"];
  isTrue : number  = 0;
  constructor(private changeDetectorRef: ChangeDetectorRef) { 
    //this.dummyArray = ["1","2","1","2"];
    
  }
  addToMessage()
  {
    this.changeDetectorRef.detach();
    this.dummyText.push("Pushed Message");
    this.dummyArray.push("1");
    this.changeDetectorRef.detectChanges();
  }
  ngOnInit(): void {
  }

}
