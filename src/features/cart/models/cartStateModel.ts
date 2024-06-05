import { CartModel } from "./cartModel";
import { CartsModel } from "./cartsModel";


export interface CartStateModel {
    carts: Nullable<CartsModel[]>;
    cart: Nullable<CartModel>;
}