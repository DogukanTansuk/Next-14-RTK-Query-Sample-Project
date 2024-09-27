import { Post } from "@/features/posts";


export default function PostPage({ params }: { params: { slug: string } }) {
  return <Post />;
}