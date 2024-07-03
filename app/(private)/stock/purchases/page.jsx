"use client"

import { Box, Button, Typography } from '@mui/material'
import PurchasesTable from './components/PurchasesTable'
import { useSelector } from 'react-redux'
import useStockCalls from '@/hooks/useStockCalls'
import { useEffect, useState } from 'react'
import PurchasesModal from './components/PurchasesModal'

const Purchases = () => {
  const { purchases } = useSelector(state => state.stock)
  const { getPurchasesTable } = useStockCalls()

  useEffect(() => {
    getPurchasesTable()
  }, [])

  const [data, setData] = useState({
    firmId: "",
    brandId: "",
    productId: "",
    price: "",
    quantity: ""
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({
      firmId: "",
      brandId: "",
      productId: "",
      price: "",
      quantity: ""
    });
  };
  
  return (
    <Box>
      <Typography variant="h4" color={"error"} mb={3}>
        Purchases
      </Typography>
      <Button variant='contained' sx={{mb: 3}} onClick={handleOpen}>
        New Purchase
      </Button>
      <PurchasesModal open={open} handleClose={handleClose} data={data} setData={setData} />
      <PurchasesTable purchases={purchases} data={data} setData={setData} handleOpen={handleOpen} />
    </Box>
  )
}

export default Purchases