import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LOGO } from "../shared/constant/url";
import { CartService } from "../shared/services/cart.service";
import { ItemsService } from "../shared/services/items.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  LOGO = LOGO;
  count: number = 0;
  cartitem: any;
  cartItemlength: any;
  constructor(
    private itemService: ItemsService,
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.countSubject.subscribe((countn) => {
      console.log(this.count);
      this.count = countn;
    });
    this.cartService.itemChanged.subscribe((data: any) => {
      this.cartitem = data;
      console.log(this.cartItemlength);
      if (this.cartitem) {
        this.cartItemlength = this.cartitem.length;
      } else {
        this.cartItemlength = 0;
      }
    });
    console.log(this.cartItemlength);
  }
  onLogout() {
    localStorage.clear();

    this.toastr.success("Logged out successfully !", "Success", {
      enableHtml: true,
      closeButton: true,
      timeOut: 10000,
    });
    this.router.navigate(["/login"]);
  }
  findItem(name) {
    this.itemService.findItem(name);
  }
}
