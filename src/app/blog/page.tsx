'use client'
import { useEffect, useState } from 'react'
import { IPost } from '@/models/IPost'
import { getAllPosts } from '@/services/getPosts'
import { Posts } from '@/components/Posts'
import { PostSearch } from '@/components/PostSearch'

export default function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    getAllPosts().then(setPosts).finally(() => setLoading(false))
  }, [])

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts}/>
      {loading ? <h3>Loading...</h3> : <Posts posts={posts}/>}
    </>
  )
}
