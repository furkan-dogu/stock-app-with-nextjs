import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { fetchFail, fetchStart, getStocksSuccess } from "@/redux/features/StockSlice"
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify"

const useStockCalls = () => {
    const dispatch = useDispatch()
    const { axiosWithToken } = useAxios()

    const getStocks = async (url) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get(`/${url}`)
            const apiData = data.data
            dispatch(getStocksSuccess({ apiData, url }))
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Error accessing data information.")
        }
    }

    const deleteStock = async (url, id) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.delete(`/${url}/${id}`)
            toastSuccessNotify("Data information deleted.");
            getStocks(url)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Data could not be deleted.")
        }
    }

    const addStock = async (url, data) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`/${url}`, data)
            toastSuccessNotify("The operation was successful.");
            getStocks(url)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("The operation has failed.")
        }
    }

    const updateStock = async (url, data) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.put(`/${url}/${data._id}`, data)
            toastSuccessNotify("Data information has been updated.");
            getStocks(url)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Data could not be updated.")
        }
    }

    return { getStocks, deleteStock, addStock, updateStock }
}

export default useStockCalls