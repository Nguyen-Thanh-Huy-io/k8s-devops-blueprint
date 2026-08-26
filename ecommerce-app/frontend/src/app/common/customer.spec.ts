import { Customer } from './customer';
import { Address } from './address';

describe('Customer', () => {
  it('should create an instance with all properties', () => {
    // Tạo các đối tượng dependencies giả để test
    const shippingAddress = new Address('123 Main St', 'New York', 'NY', 'USA', '10001');
    const billingAddress = new Address('456 Elm St', 'Los Angeles', 'CA', 'USA', '90001');

    const customer = new Customer(
      'John', 'Doe',
      'john.doe@example.com', 'password123',
      shippingAddress,
      billingAddress
    );

    expect(customer).toBeTruthy();
    expect(customer.firstName).toBe('John');
    expect(customer.lastName).toBe('Doe');
    expect(customer.email).toBe('john.doe@example.com');
    expect(customer.password).toBe('password123');
    expect(customer.shippingAddress).toBe(shippingAddress);
    expect(customer.billingAddress).toBe(billingAddress);
  });

  it('should create an instance with default values', () => {
    const customer = new Customer();

    expect(customer).toBeTruthy();
    expect(customer.firstName).toBeUndefined();
    expect(customer.lastName).toBeUndefined();
    expect(customer.email).toBeUndefined();
    expect(customer.password).toBeUndefined();
    expect(customer.shippingAddress).toBeUndefined();
    expect(customer.billingAddress).toBeUndefined();
  });
});
