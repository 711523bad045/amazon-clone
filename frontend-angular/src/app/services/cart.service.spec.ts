import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  // Add product to cart
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  // Get all cart items
  getCartItems() {
    return this.cartItems;
  }

  // Remove product by index
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  // Get total price
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // Get cart count
  getCartCount() {
    return this.cartItems.length;
  }
}
