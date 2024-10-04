import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductTable } from '../components/ProductTable';
import { useProducts, Product } from '../lib/products';
import { withAuth } from '../components/withAuth';

interface ProductsPageProps {
    initialProducts: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ initialProducts }) => {
    const [products, setProducts] = useState(initialProducts);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Products
            </Typography>
            <ProductTable products={products} />
        </Box>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const { getProducts } = useProducts();
    const productsResponse = await getProducts();

    return {
        props: {
            initialProducts: productsResponse.products,
        },
    };
};

export default withAuth(ProductsPage);