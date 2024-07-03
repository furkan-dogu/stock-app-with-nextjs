"use client"

import useStockCalls from '@/hooks/useStockCalls'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FirmCard from './components/FirmCard'
import FirmModal from './components/FirmModal'

const Firms = () => {
  const { getStocks } = useStockCalls()
  const { firms } = useSelector(state => state.stock)
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    image: ""
  })

  useEffect(() => {
    getStocks("firms")
  }, [])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setData({
      name: "",
      phone: "",
      address: "",
      image: ""
    })
  };
  return (
    <Box>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant='contained' onClick={handleOpen}>
        New Firm
      </Button>
      <FirmModal open={open} handleClose={handleClose} data={data} setData={setData} />
      <Grid container justifyContent={"center"} spacing={2} mt={2}>
        {firms.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} handleOpen={handleOpen} setData={setData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Firms