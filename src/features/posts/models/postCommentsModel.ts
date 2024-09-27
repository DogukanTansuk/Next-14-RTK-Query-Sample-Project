export interface PostCommentsModel {
    id: number
    body: string
    postId: number
    likes: number
    user: {
        id: number
        username: string
        fullName: string
    }
}