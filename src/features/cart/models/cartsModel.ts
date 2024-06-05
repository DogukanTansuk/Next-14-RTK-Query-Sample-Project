import {CartModel} from './cartModel'

export interface CartsModel {
  carts: CartModel[]
  total: number
  skip: number
  limit: number
}
