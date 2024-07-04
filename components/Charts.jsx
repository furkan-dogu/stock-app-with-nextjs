import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Charts({ sales, purchases }) {
  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString(),
    Amount: item.amount,
  }));

  const salesDates = salesData?.map((item) => item.date);
  const salesAmount = salesData?.map((item) => item.Amount);

  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString(),
    Amount: item.amount,
  }));

  const purchasesDates = purchasesData.map((item) => item.date);
  const purchasesAmount = purchasesData.map((item) => item.Amount);

  return (
    <Container>
      <Stack justifyContent={"center"} direction={"row"} gap={3} mt={3} flexWrap={"wrap"}>
        <Box bgcolor={"lightgray"} p={2} borderRadius={2} boxShadow={3}>
          <Typography variant="h6">Total Sales (USD)</Typography>
          <Box>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: salesDates,
                },
              ]}
              series={[
                {
                  data: salesAmount,
                  label: "Amount"
                },
              ]}
              width={400}
              height={300}
            />
          </Box>
        </Box>
        <Box bgcolor={"lightgray"} p={2} borderRadius={2} boxShadow={3}>
          <Typography variant="h6">Total Purchases (USD)</Typography>
          <Box>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: purchasesDates,
                },
              ]}
              series={[
                {
                  data: purchasesAmount,
                  label: "Amount",
                },
              ]}
              width={400}
              height={300}
            />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
