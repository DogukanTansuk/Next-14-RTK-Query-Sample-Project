'use client'

// Feature Imports
import { CartModel, CartStateModel, CartsModel } from './models'

// Package Imports
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState: CartStateModel = {
    cart: null,
    carts: null,
}

export const {reducer, actions} = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state: CartStateModel, {payload}: PayloadAction<Nullable<CartModel>>) => {
            state.cart = payload
        },
        setCarts: (state: CartStateModel, {payload}: PayloadAction<Nullable<CartsModel[]>>) => {
            state.carts = payload
        },
       
    },

})

export const {setCart, setCarts} = actions
export default reducer