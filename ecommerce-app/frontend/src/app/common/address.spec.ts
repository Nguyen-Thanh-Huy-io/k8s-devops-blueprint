import { Address } from './address';

describe('Address', () => {
  it('should create an instance with all properties', () => {
    const address = new Address('123 Main St', 'New York', 'NY', 'USA', '10001');

    expect(address.street).toBe('123 Main St');
    expect(address.city).toBe('New York');
    expect(address.state).toBe('NY');
    expect(address.country).toBe('USA');
    expect(address.zipCode).toBe('10001');
  });
});