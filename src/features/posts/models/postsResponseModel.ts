import {PostModel} from './postModel'

export interface PostsResponseModel extends PostModel {
  map(arg0: (post: PostsResponseModel) => import("react").JSX.Element): import("react").ReactNode
  posts: PostModel[]
  total: number
  skip: number
  limit: number
}
