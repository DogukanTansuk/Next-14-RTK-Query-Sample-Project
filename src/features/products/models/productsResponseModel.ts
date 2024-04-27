import { ProductModel } from "./productModel"


export interface ProductsResponseModel {
  products: ProductModel[]
  total: number
  skip: number
  limit: number
}
