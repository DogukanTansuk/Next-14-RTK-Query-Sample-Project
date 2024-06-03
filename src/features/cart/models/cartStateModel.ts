import { CartsModel } from "./cartsModel";


export interface CartStateModel {
    carts: Nullable<CartsModel[]>;
    cart: Nullable<CartsModel>;
}