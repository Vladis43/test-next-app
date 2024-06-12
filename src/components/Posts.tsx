'use client'
import Link from 'next/link'
import useSWR from 'swr'
import { IPost } from '@/models/IPost'
import { getAllPosts } from '@/services/getPosts'

export const Posts = () => {
  const { data: posts, isLoading } = useSWR<IPost[]>('posts', getAllPosts)

  if (isLoading) return <h3>Loading...</h3>

  return (
    <ul>
      {posts!.map((post: IPost) => (
        <li key={post.id}>
          <Link href={`blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
