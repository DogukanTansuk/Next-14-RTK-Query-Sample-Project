import {CartModel} from './cartModel'

export interface CartsModel extends CartModel {
  carts: CartModel[]
  total: number
  skip: number
  limit: number
}
