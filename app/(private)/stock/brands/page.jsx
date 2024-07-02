"use client"

import BrandCard from '@/components/BrandCard'
import useStockCalls from '@/hooks/useStockCalls'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Brands = () => {
  const { getStocks } = useStockCalls()
  const { brands } = useSelector(state => state.stock)

  useEffect(() => {
    getStocks("brands")
  }, [])

  return (
    <Box>
      <Typography variant="h4" color={"error"} mb={3}>
        Brands
      </Typography>
      <Button variant='contained'>
        New Brand
      </Button>
      <Grid container justifyContent={"center"} spacing={2} mt={2}>
        {brands.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard brand={brand} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Brands