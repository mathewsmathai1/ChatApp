import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm : FormGroup;
  constructor(fBuilder : FormBuilder) 
  {
     this.signUpForm = fBuilder.group({
         emailId: [""], password: [''], confirmPassword : ['']
     });

    
   }

  ngOnInit(): void {
  }

}
