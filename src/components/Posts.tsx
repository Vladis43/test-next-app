'use client'
import Link from 'next/link'
import useSWR from 'swr'
import { IPost } from '@/models/IPost'
import { getAllPosts } from '@/services/getPosts'
import { Loading } from '@/components/Loading'

export const Posts = () => {
  const { data: posts, isLoading } = useSWR<IPost[]>('posts', getAllPosts)

  if (isLoading) return <Loading/>

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
