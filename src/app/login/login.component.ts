import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IMAGE_URL, LOGO } from "../shared/constant/url";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  IMAGE_URL = IMAGE_URL;
  LOGO = LOGO;
  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(res => 
      
      console.log(res));
    

  }
}
