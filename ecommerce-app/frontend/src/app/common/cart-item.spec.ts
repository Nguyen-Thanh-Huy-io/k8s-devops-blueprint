import { CartItem } from './cart-item';
import { Product } from './product';

describe('CartItem', () => {
  let product: Product;
  let cartItem: CartItem;

  beforeEach(() => {
    // Tạo một đối tượng product để test
    product = new Product();
    product.id = 1;
    product.name = 'Test Product';
    product.imageUrl = 'test.jpg';
    product.unitPrice = 100;

    // Tạo cartItem với product này
    cartItem = new CartItem(product);
  });

  it('should create an instance with product', () => {
    expect(cartItem).toBeTruthy();
    expect(cartItem.product).toBe(product);
    expect(cartItem.quantity).toBe(1);
  });

  it('should calculate total price correctly', () => {
    cartItem.quantity = 5;
    // 5 * 100 = 500
    expect(cartItem.totalPrice).toBe(500);
  });

  it('should calculate total price for quantity 0', () => {
    cartItem.quantity = 0;
    expect(cartItem.totalPrice).toBe(0);
  });
});
