import { ProductModel } from "./productModel"


export interface ProductsResponseModel {
  map(arg0: (product: any) => import("react").JSX.Element): import("react").ReactNode
  length: number
  products: ProductModel[]
  total: number
  skip: number
  limit: number
}
