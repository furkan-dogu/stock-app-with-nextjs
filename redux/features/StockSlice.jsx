import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: false,
    brands: [],
    firms: [],
    products: [],
    sales: [],
    purchases: [],
    categories: []
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
        },
        getProductTableSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.products = payload[0];
            state.categories = payload[1];
            state.brands = payload[2];
        },
        getSalesTableSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.sales = payload[0]
            state.brands = payload[1]
            state.products = payload[2]
        },
        getPurchasesTableSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.purchases = payload[0]
            state.firms = payload[1]
            state.brands = payload[2]
            state.products = payload[3]
        }
    }
})

export const {
    fetchStart,
    fetchFail,
    getStocksSuccess,
    getProductTableSuccess,
    getSalesTableSuccess,
    getPurchasesTableSuccess
} = StockSlice.actions

export default StockSlice.reducer