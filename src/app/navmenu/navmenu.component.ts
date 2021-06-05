import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  navList : Array<string> = ["Home","SignUp","Login","MyChats"];
  navLink  : any = {
                    Home : "http://localhost:4200/Home",
                    SignUp : "http://localhost:4200/SignUp",
                    Login : "http://localhost:4200/login",
                    MyChats : "http://localhost:4200/MyChats"
                  };
  navTrack : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
