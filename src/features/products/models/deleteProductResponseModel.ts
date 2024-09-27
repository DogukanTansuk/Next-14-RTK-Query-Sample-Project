import { ProductModel } from "./productModel";

export interface DeleteProductResponseModel extends ProductModel {
   isDeleted: boolean
}