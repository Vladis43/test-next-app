import Link from 'next/link'
import { IPost } from '@/models/IPost'

interface Props {
  posts: IPost[]
}

export const Posts = ({ posts }: Props) => (
  <ul>
    {posts.map((post: IPost) => (
      <li key={post.id}>
        <Link href={`blog/${post.id}`}>{post.title}</Link>
      </li>
    ))}
  </ul>
)
