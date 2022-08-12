import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/services/items.service';
import { CartService } from '../shared/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemTypes = [
    { name: 'All', type: 'all', imagePath: 'https://media.istockphoto.com/photos/various-plates-of-food-isolated-on-white-background-top-view-picture-id1058241232'},
    { name: 'Dinner', type: 'dinner', imagePath: 'https://media.istockphoto.com/photos/enjoying-dinner-with-friends-picture-id500516612' },
    { name: 'Dessert', type: 'dessert', imagePath: 'https://media.istockphoto.com/photos/fresh-cakes-picture-id497959594' },
    { name: 'Lunch', type: 'lunch', imagePath: 'https://media.istockphoto.com/photos/ready-to-serve-lunch-picture-id860534328'},
  ];

  public selectedItem = 'all';
  selectedFood:any;
  items = [];
  canBeAdded: any;
  displayModal: boolean;
  displayDetail:boolean = false;
  constructor(
    private itemService: ItemsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.itemService.getAllCategory()
  }

  switchItem(key: any) {
    this.selectedItem = key;
  }

  findItem(itemName: string){
    this.items = this.items.filter(item => item.name === itemName)
  }

  showItem(item: any) {
    console.log(item);
    this.selectedFood = item;

    Swal.fire({
      title: item.name,
      text: item.description,
      imageUrl: item.imagePath,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    
    
  }
  
  addToCart(item: any) {
    this.canBeAdded = this.cartService.addItem(item);

    // this.displayModal = !this.canBeAdded;
      // Swal.fire({
      //   toast: true,
      //   position: 'top',
      //   showConfirmButton: false,
      //   icon: 'success',
      //   timerProgressBar:false,
      //   timer: 5000,
      //   title: 'Added to cart'
      // })
    }
}
