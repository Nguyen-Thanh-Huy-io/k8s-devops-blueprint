import { Country } from './country';

describe('Country', () => {
  it('should create an instance with id and name', () => {
    const country = new Country(1, 'United States');

    expect(country.id).toBe(1);
    expect(country.name).toBe('United States');
  });

  it('should create an instance with default values if no arguments provided', () => {
    const country = new Country();

    expect(country.id).toBeUndefined();
    expect(country.name).toBeUndefined();
  });
});
