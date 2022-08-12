import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMAGE_URL, LOGO } from '../shared/constant/url';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  LOGO = LOGO
  IMAGE_URL = IMAGE_URL
  registrationForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }
onSubmit(){
const data = this.authService.registration(this.registrationForm).subscribe(res => res
  )
  console.log(data);
  
  
}
}
