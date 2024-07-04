"use client"

import useStockCalls from "@/hooks/useStockCalls"
import Charts from "../../../components/Charts"
import KPI from "../../../components/KPI"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const Stock = () => {
  const { getStocks } = useStockCalls()
  const { sales, purchases } = useSelector(state => state.stock)

  useEffect(() => {
    getStocks("sales")
    getStocks("purchases")
  }, [])
  
  return (
    <>
      <KPI sales={sales} purchases={purchases} />
      <Charts sales={sales} purchases={purchases} />
    </>
  )
}

export default Stock