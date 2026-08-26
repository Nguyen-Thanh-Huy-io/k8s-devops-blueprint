import { OrderHistory } from './order-history';

describe('OrderHistory', () => {
  it('should create an instance with default values', () => {
    const orderHistory = new OrderHistory();

    expect(orderHistory).toBeTruthy();
    expect(orderHistory.orderTrackingNumber).toBeUndefined();
    expect(orderHistory.totalAmount).toBeUndefined();
    expect(orderHistory.totalQuantity).toBeUndefined();
    expect(orderHistory.dateCreated).toBeUndefined();
  });
});
