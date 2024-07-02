import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    brands: [],
    firms: [],
    products: [],
    sales: [],
    purchases: []
}

const StockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        getStocksSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state[payload.url] = payload.apiData
        }
    }
})

export const {
    fetchStart,
    fetchFail,
    getStocksSuccess
} = StockSlice.actions

export default StockSlice.reducer