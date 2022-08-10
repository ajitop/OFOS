import { Component, OnInit } from '@angular/core';
import { IMAGE_URL, LOGO } from '../shared/constant/url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  IMAGE_URL = IMAGE_URL
LOGO = LOGO;
  ngOnInit(): void {

  }

}
