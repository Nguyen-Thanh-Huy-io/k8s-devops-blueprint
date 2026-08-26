import { Order } from './order';
import { Address } from './address';
import { OrderItem } from './order-item';

describe('Order', () => {
  let order: Order;

  beforeEach(() => {
    // Tạo các dependencies giả
    const shippingAddress = new Address('123 Main St', 'New York', 'NY', 'USA', '10001');
    const billingAddress = new Address('456 Elm St', 'Los Angeles', 'CA', 'USA', '90001');
    const orderItems: OrderItem[] = [];

    // Tạo order
    order = new Order(
      1,
      1000,
      'TXN-001',
      new Date(),
      'COMPLETED',
      shippingAddress,
      billingAddress,
      orderItems
    );
  });

  it('should create an instance with all properties', () => {
    expect(order).toBeTruthy();
    expect(order.id).toBe(1);
    expect(order.totalAmount).toBe(1000);
    expect(order.orderTrackingNumber).toBe('TXN-001');
    expect(order.status).toBe('COMPLETED');
    expect(order.orderItems).toEqual([]);
  });

  it('should create an instance with default values', () => {
    const defaultOrder = new Order();

    expect(defaultOrder).toBeTruthy();
    expect(defaultOrder.id).toBeUndefined();
    expect(defaultOrder.totalAmount).toBeUndefined();
    expect(defaultOrder.orderTrackingNumber).toBeUndefined();
    expect(defaultOrder.status).toBeUndefined();
    expect(defaultOrder.shippingAddress).toBeUndefined();
    expect(defaultOrder.billingAddress).toBeUndefined();
    expect(defaultOrder.orderItems).toBeUndefined();
  });
});
