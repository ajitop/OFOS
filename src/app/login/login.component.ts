import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { IMAGE_URL, LOGO } from "../shared/constant/url";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}
  IMAGE_URL = IMAGE_URL;
  LOGO = LOGO;
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  ngOnInit(): void {}

  onSubmit() {
    let username = btoa(this.loginForm.value.username);
    let password = btoa(this.loginForm.value.password);
    this.authService.login( this.loginForm.value).subscribe(res => 
      
    {this.router.navigate(['./home'])
    this.toastr.success('Logged in successfully !',
           'Success', {
           enableHtml: true,
           closeButton: true,
           timeOut: 10000
         });
        })
    

  }
}
