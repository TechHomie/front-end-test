import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, Edit, Delete, Share } from '@mui/icons-material';
import { Product } from '../../lib/products';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const PercentageChip = styled(Chip)<{ value: number }>(({ theme, value }) => ({
    backgroundColor: value >= 50 ? theme.palette.success.light : theme.palette.error.light,
    color: theme.palette.common.white,
    borderRadius: '50%',
    width: '40px',
    height: '40px',
}));

const columnHelper = createColumnHelper<Product>();

const columns = [
    columnHelper.accessor('id', {
        header: 'ID',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('title', {
        header: 'Title',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('description', {
        header: 'Description',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('category', {
        header: 'Category',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('price', {
        header: 'Price',
        cell: (info) => `$${info.getValue().toFixed(2)}`,
    }),
    columnHelper.accessor('discountPercentage', {
        header: 'Discount',
        cell: (info) => (
            <PercentageChip
                label={`${info.getValue().toFixed(0)}%`}
                value={info.getValue()}
            />
        ),
    }),
    columnHelper.accessor('rating', {
        header: 'Rating',
        cell: (info) => (
            <PercentageChip
                label={`${(info.getValue() * 20).toFixed(0)}%`}
                value={info.getValue() * 20}
            />
        ),
    }),
    columnHelper.accessor('stock', {
        header: 'Stock',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('brand', {
        header: 'Brand',
        cell: (info) => info.getValue(),
    }),
    {
        id: 'actions',
        header: 'Actions',
        cell: () => (
            <>
                <IconButton size="small"><Visibility /></IconButton>
                <IconButton size="small"><Edit /></IconButton>
                <IconButton size="small"><Share /></IconButton>
                <IconButton size="small"><Delete /></IconButton>
            </>
        ),
    },
];

interface ProductTableProps {
    products: Product[];
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
    const table = useReactTable({
        data: products,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <StyledTableCell key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <StyledTableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <StyledTableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};