'use client'
import Link from 'next/link'
import { shallow } from 'zustand/shallow'
import { IPost } from '@/models/IPost'
import { usePosts } from '@/store'
import { useEffect } from 'react'

export const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(state => [state.posts, state.loading, state.getAllPosts], shallow)

  useEffect(() => {
    (async () => await getAllPosts())()
  }, [getAllPosts])

  if (loading) return <h3>Loading...</h3>

  return (
    <ul>
      {posts.map((post: IPost) => (
        <li key={post.id}>
          <Link href={`blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
