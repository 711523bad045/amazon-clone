import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  // ✅ Add product to cart
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  // ✅ Get all items
  getCartItems() {
    return this.cartItems;
  }

  // ✅ Remove by index
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  // ✅ Total price
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // ✅ Cart count
  getCartCount() {
    return this.cartItems.length;
  }
}
