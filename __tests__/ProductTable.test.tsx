import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductTable } from '../components/ProductTable/index';
import { Product } from '../lib/products';

const mockProducts: Product[] = [
    { id: 1, title: 'Product 1', price: 10, category: 'Category 1', description: '', discountPercentage: 0, rating: 0, stock: 0, brand: '', thumbnail: '', images: [] },
    { id: 2, title: 'Product 2', price: 20, category: 'Category 2', description: '', discountPercentage: 0, rating: 0, stock: 0, brand: '', thumbnail: '', images: [] },
];

describe('ProductTable', () => {
    it('renders the product table with correct data', () => {
        render(<ProductTable products={mockProducts} />);

        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
        expect(screen.getByText('$10.00')).toBeInTheDocument();
        expect(screen.getByText('$20.00')).toBeInTheDocument();
        expect(screen.getByText('Category 1')).toBeInTheDocument();
        expect(screen.getByText('Category 2')).toBeInTheDocument();
    });
});