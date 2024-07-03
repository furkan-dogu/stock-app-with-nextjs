import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card, Container, Grid, Typography } from "@mui/material";

export default function Charts({ sales, purchases }) {
  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString(),
    Amount: item.amount,
  }));

  const salesDates = salesData.map((item) => item.date);
  const salesAmount = salesData.map((item) => item.Amount);

  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString(),
    Amount: item.amount,
  }));

  const purchasesDates = purchasesData.map((item) => item.date);
  const purchasesAmount = purchasesData.map((item) => item.Amount);

  return (
    <Container>
      <Grid container mt={2} spacing={2}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h6">Total Sales (USD)</Typography>
          <Card>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: salesDates,
                  label: "Date",
                },
              ]}
              series={[
                {
                  data: salesAmount,
                  label: "Amount",
                },
              ]}
              width={500}
              height={300}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h6">Total Purchases (USD)</Typography>
          <Card>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: purchasesDates,
                  label: "Date",
                },
              ]}
              series={[
                {
                  data: purchasesAmount,
                  label: "Amount",
                },
              ]}
              width={500}
              height={300}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
