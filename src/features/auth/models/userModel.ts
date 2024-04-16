// Model Imports
import {BaseModel} from '@/models'

export interface UserModel extends BaseModel {
  id: number
  email: string
  name: string
  username: string
  phone: string
  website: string
}
