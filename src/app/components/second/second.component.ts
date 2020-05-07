import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    productType: new FormControl(''),
    productId: new FormControl(''),
    productName: new FormControl(''),
    productDetail: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productForm.setValue;
  }

}
