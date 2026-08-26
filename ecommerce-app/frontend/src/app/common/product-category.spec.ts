import { ProductCategory } from './product-category';

describe('ProductCategory', () => {
    it('should create an instance with default values', () => {
        const productCategory = new ProductCategory();

        expect(productCategory).toBeTruthy();
        expect(productCategory.id).toBeUndefined();
        expect(productCategory.categoryName).toBeUndefined();
    });

    it('should set properties when values are assigned', () => {
        const productCategory = new ProductCategory();
        productCategory.id = 1;
        productCategory.categoryName = 'Books';

        expect(productCategory.id).toBe(1);
        expect(productCategory.categoryName).toBe('Books');
    });
});
