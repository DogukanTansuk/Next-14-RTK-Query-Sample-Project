import { ProductModel } from '@/features/products';

export interface CartModel extends ProductModel {
  id: string
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
