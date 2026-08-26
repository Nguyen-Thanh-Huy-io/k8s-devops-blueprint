import { Purchase } from './purchase';

describe('Purchase', () => {
  it('should create an instance with default values', () => {
    const purchase = new Purchase();

    expect(purchase).toBeTruthy();
    expect(purchase.orderTrackingNumber).toBeUndefined();
    expect(purchase.totalAmount).toBeUndefined();
    expect(purchase.totalQuantity).toBeUndefined();
    expect(purchase.dateCreated).toBeUndefined();
  });
});
