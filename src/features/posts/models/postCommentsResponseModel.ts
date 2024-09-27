import { PostCommentsModel } from "./postCommentsModel";

export interface PostCommentsResponseModel extends PostCommentsModel {
    comments: PostCommentsModel[]
    total: number
    skip: number
    limit: number
}