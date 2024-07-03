"use client"

import BrandCard from './components/BrandCard'
import useStockCalls from '@/hooks/useStockCalls'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BrandModal from './components/BrandModal'

const Brands = () => {
  const { getStocks } = useStockCalls()
  const { brands } = useSelector(state => state.stock)
  const [data, setData] = useState({
    name: "",
    image: ""
  })

  useEffect(() => {
    getStocks("brands")
  }, [])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setData({
      name: "",
      image: ""
    })
  };

  return (
    <Box>
      <Typography variant="h4" color={"error"} mb={3}>
        Brands
      </Typography>
      <Button variant='contained' onClick={handleOpen}>
        New Brand
      </Button>
      <BrandModal open={open} handleClose={handleClose} data={data} setData={setData} />
      <Grid container justifyContent={"center"} spacing={2} mt={2}>
        {brands.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard brand={brand} handleOpen={handleOpen} setData={setData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Brands