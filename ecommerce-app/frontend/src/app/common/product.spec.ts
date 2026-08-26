// import { Product } from './product';
//
// describe('Product', () => {
//   it('should create an instance', () => {
//     expect(new Product()).toBeTruthy();
//   });
// });
import { Product } from './product';

describe('Product', () => {
    it('should create an instance with default values', () => {
        const product = new Product();

        expect(product).toBeTruthy();
        expect(product.id).toBeUndefined();
        expect(product.sku).toBeUndefined();
        expect(product.name).toBeUndefined();
        expect(product.description).toBeUndefined();
        expect(product.unitPrice).toBeUndefined();
        expect(product.imageUrl).toBeUndefined();
        expect(product.active).toBeUndefined();
        expect(product.unitsInStock).toBeUndefined();
        expect(product.dateCreated).toBeUndefined();
        expect(product.lastUpdated).toBeUndefined();
        expect(product.categoryId).toBeUndefined();
    });

    it('should set properties when values are assigned', () => {
        const product = new Product();
        product.id = 1;
        product.sku = 'SKU123';
        product.name = 'Test Product';
        product.description = 'A test product';
        product.unitPrice = 19.99;
        product.imageUrl = 'test.jpg';
        product.active = true;
        product.unitsInStock = 10;
        product.dateCreated = new Date();
        product.lastUpdated = new Date();
        product.categoryId = 5;

        expect(product.id).toBe(1);
        expect(product.sku).toBe('SKU123');
        expect(product.name).toBe('Test Product');
        expect(product.description).toBe('A test product');
        expect(product.unitPrice).toBe(19.99);
        expect(product.imageUrl).toBe('test.jpg');
        expect(product.active).toBe(true);
        expect(product.unitsInStock).toBe(10);
        expect(product.dateCreated).toBeInstanceOf(Date);
        expect(product.lastUpdated).toBeInstanceOf(Date);
        expect(product.categoryId).toBe(5);
    });
});