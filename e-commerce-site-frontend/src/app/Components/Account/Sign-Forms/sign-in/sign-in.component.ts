import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {

  constructor(private router: Router) { }

  public showValidation_Box = false;

  public loginCredentials = {
    username:"",
    password:""
  }

  public get_userCredentials = {
    correct_Username:"",
    correct_Password:""
  }

  public showData_Validations = {
    username_Error:false,
    password_Error:false
  };

  public inputChange(inputData:any) {
    
  }

  public handdleData_Error () {
    this.showData_Validations.username_Error = false;
    this.showData_Validations.password_Error = false;
  }

  stringify = (obj: any) => JSON.stringify(obj);    

  public onSubmit(formdata:NgForm) {
    
    this.showValidation_Box = true;

    this.get_userCredentials.correct_Username = "mahinda123";
    this.get_userCredentials.correct_Password = "12345"

      

    if(this.loginCredentials.username == this.get_userCredentials.correct_Username) {
      if(this.loginCredentials.password == this.get_userCredentials.correct_Password) {
        this.router.navigate(['/'], {queryParams:{user: this.stringify(this.loginCredentials.username)}});
      }

      else{
        this.showData_Validations.password_Error = true;
      }
    }

    else {
      this.showData_Validations.username_Error = true;
    }
   
  }
}
