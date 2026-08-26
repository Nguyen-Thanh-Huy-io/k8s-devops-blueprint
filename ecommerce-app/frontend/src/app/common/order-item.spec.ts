import { OrderItem } from './order-item';

describe('OrderItem', () => {
  it('should create an instance', () => {
    // Tạo cartItem giả để truyền vào constructor theo đúng yêu cầu của TypeScript
    const dummyCartItem: any = {};

    expect(new OrderItem(dummyCartItem)).toBeTruthy();
  });
});