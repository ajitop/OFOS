import { Component, OnInit } from '@angular/core';
import { IMAGE_URL, LOGO } from '../shared/constant/url';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  LOGO = LOGO
  IMAGE_URL = IMAGE_URL

  constructor() { }

  ngOnInit(): void {
  }

}
