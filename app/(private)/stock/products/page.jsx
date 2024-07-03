"use client"

import { Box, Button, Typography } from '@mui/material'
import ProductTable from './components/ProductTable'
import { useSelector } from 'react-redux'
import useStockCalls from '@/hooks/useStockCalls'
import { useEffect, useState } from 'react'
import ProductsModal from './components/ProductsModal'

const Products = () => {
  const { products } = useSelector(state => state.stock)
  const { getProductTable } = useStockCalls()

  useEffect(() => {
    getProductTable()
  }, [])

  const [data, setData] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({
      name: "",
      categoryId: "",
      brandId: "",
    });
  };
  
  return (
    <Box>
      <Typography variant="h4" color={"error"} mb={3}>
        Products
      </Typography>
      <Button variant='contained' sx={{mb: 3}} onClick={handleOpen}>
        New Product
      </Button>
      <ProductsModal open={open} handleClose={handleClose} data={data} setData={setData} />
      <ProductTable products={products} />
    </Box>
  )
}

export default Products