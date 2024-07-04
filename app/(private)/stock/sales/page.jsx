"use client"

import { Box, Button, Typography } from '@mui/material'
import SalesTable from './components/SalesTable'
import { useSelector } from 'react-redux'
import useStockCalls from '@/hooks/useStockCalls'
import { useEffect, useState } from 'react'
import SalesModal from './components/SalesModal'
import TableSkeleton, { ErrorMsg, NoDataMsg } from '@/components/LoadingAndErrorMsg'

const Sales = () => {
  const { sales, loading, error } = useSelector(state => state.stock)
  const { getSalesTable } = useStockCalls()

  useEffect(() => {
    getSalesTable()
  }, [])

  const [data, setData] = useState({
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
      brandId: "",
      productId: "",
      price: "",
      quantity: ""
    });
  };
  
  return (
    <Box>
      <Typography variant="h4" color={"error"} mb={3}>
        Sales
      </Typography>
      <Button variant='contained' sx={{mb: 3}} onClick={handleOpen}>
        New Sale
      </Button>
      <SalesModal open={open} handleClose={handleClose} data={data} setData={setData} />

      {error && <ErrorMsg />}

      {loading && [1,2,3,4,5].map((item) => <TableSkeleton key={item} />)}

      {!loading && !sales.length && <NoDataMsg />}

      {!error && !loading && sales.length > 0 && <SalesTable sales={sales} data={data} setData={setData} handleOpen={handleOpen} />}
    </Box>
  )
}

export default Sales