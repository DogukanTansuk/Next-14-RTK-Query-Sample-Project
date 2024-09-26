import {PostsModel} from './postsModel'

export interface PostsResponseModel extends PostsModel {
  posts: PostsModel[]
  total: number
  skip: number
  limit: number
}
