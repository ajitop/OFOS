import { Injectable, EventEmitter } from "@angular/core";
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class CartService {
  itemChanged = new EventEmitter<any>();
  cartItems = [];
  cartCount = 0;
  public subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public countSubject: BehaviorSubject<any> = new BehaviorSubject<number>(0);
  constructor() {}

  addSingle(item: any) {
    if (!this.cartItems.some((value) => value.name === item.name)) {
      this.cartItems.push(item);
      this.itemChanged.emit(item);
      this.cartCount++;
      return true;
    } else {
      return false;
    }
  }
  addItem(item: any) {
    
    
    this.cartItems.push(item);
    // this.countSubject.next(this.cartCount);
    this.cartCount++;
    this.countSubject.next(this.cartCount)
    return this.subject.next(this.cartItems);
  }
  removeCartItem(index: any) {
    // this.countSubject.next(this.cartCount);
    this.cartItems.splice(index, 1);
    this.cartCount --;
  }
  getCartCount() {
    return this.countSubject.next(this.cartCount);

  }
}
