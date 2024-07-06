"use client"

import { Box, Button, Typography } from '@mui/material'
import PurchaseTable from './components/PurchaseTable'
import { useSelector } from 'react-redux'
import useStockCalls from '@/hooks/useStockCalls'
import { useEffect, useState } from 'react'
import PurchaseModal from './components/PurchaseModal'
import TableSkeleton, { ErrorMsg, NoDataMsg } from '@/components/LoadingAndErrorMsg'

const Purchases = () => {
  const { purchases, loading, error } = useSelector(state => state.stock)
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
      <PurchaseModal open={open} handleClose={handleClose} data={data} setData={setData} />

      {error && <ErrorMsg />}

      {loading && [1,2,3,4,5].map((item) => <TableSkeleton key={item} />)}

      {!error && !loading && !purchases.length && <NoDataMsg />}

      {!error && !loading && purchases.length > 0 && <PurchaseTable purchases={purchases} data={data} setData={setData} handleOpen={handleOpen} />}
    </Box>
  )
}

export default Purchases