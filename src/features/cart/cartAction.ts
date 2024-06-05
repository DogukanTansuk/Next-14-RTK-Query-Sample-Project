import { createAction } from "@reduxjs/toolkit"
import { CartModel, CartsModel } from "./models"
import { setCart, setCarts } from "./cartSlice"

export const setCartAction = createAction('cart/setCartAction', (cart: Nullable<CartModel>, {dispatch}) => dispatch(setCart(cart)))

export const setCartsAction = createAction('cart/setCartsAction', (carts: Nullable<CartsModel[]>, {dispatch}) => dispatch(setCarts(carts)))

