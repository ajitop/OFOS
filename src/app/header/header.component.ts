import { Component, OnInit } from '@angular/core';
import { LOGO } from '../shared/constant/url';
import { CartService } from '../shared/services/cart.service';
import { ItemsService } from '../shared/services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 LOGO = LOGO
 count:number = 0;
  constructor(private itemService: ItemsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.countSubject.subscribe(countn => {
    console.log(this.count)
    this.count = countn
    })
  }
 findItem(name){
  this.itemService.findItem(name);
 }
 
}
