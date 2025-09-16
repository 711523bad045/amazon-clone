import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { title: "iPhone 14", price: 79999, image: "https://via.placeholder.com/100" },
    { title: "Samsung Galaxy S23", price: 69999, image: "https://via.placeholder.com/100" },
    { title: "OnePlus 11", price: 59999, image: "https://via.placeholder.com/100" }
  ];
}
