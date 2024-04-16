// Model Imports
import {BaseModel} from '@/models'

export interface UserModel extends BaseModel {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}
