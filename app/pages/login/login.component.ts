import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service"
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  selector: "login-component",/*
  template: "<Label text='Poén gec'></Label>"*/
  templateUrl: "pages/login/login.html",
  styleUrls: [ "pages/login/login-common.css", "pages/login/login.css" ],
  providers: [ User, UserService ]  
})
export class LoginComponent implements OnInit {

  user: User;
  isLoggingIn = true;
  @ViewChild("container") container: ElementRef;

  constructor(user: User, private userService: UserService, private router: Router, private page: Page){
    this.user = user;
    this.user.email = "tester@cae.com";
    this.user.password = "cae123";
  }

  ngOnInit(){

      this.page.actionBarHidden = true;
      this.page.backgroundImage = "res://bg_login";

  }

  public submit(){
    if (this.isLoggingIn){
      this.login();
    } else {
      this.signUp();
    }
  }
  
  private login(){
      this.userService.login(this.user)
        .subscribe(
            () => this.router.navigate(["/list"]),
            (error) => alert("No access bitch")
        );
  }

  private signUp(){
    this.userService.register(this.user)
      .subscribe(
        ()=> {
          alert("Your account has been succesfully created!");
          this.toggleDisplay();
        },
        ()=> {
          alert("Your account has not been succesfully created!");
          });
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    let container = <View>this.container.nativeElement;
    container.animate({
        backgroundColor: this.isLoggingIn ? new Color("white"): new Color("deeppink"),
        duration: 200
    });
  }

}