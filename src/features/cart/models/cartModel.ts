import { CartProductsModel } from "./cartProductsModel"

export interface CartModel {
  products: CartProductsModel[]
  id: string
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
