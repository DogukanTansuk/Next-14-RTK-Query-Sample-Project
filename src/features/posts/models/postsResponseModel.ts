import {PostsModel} from './postsModel'

export interface PostsResponseModel extends PostsModel {
  map(arg0: (post: PostsResponseModel) => import("react").JSX.Element): import("react").ReactNode
  posts: PostsModel[]
  total: number
  skip: number
  limit: number
}
