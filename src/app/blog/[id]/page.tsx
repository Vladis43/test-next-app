'use client'
import useSWR from 'swr'
import { getPost } from '@/services/getPosts'
import { IPost } from '@/models/IPost'
import { Loading } from '@/components/Loading'

interface Props {
  params: {
    id: string
  }
}

const Post: React.FC<Props> = ({ params: { id } }) => {
  const { data: post, isLoading } = useSWR<IPost>(`post-${id}`, () => getPost(id))

  if (isLoading) return <Loading/>

  return (
    <>
      <h1>{post!.title}</h1>
      <p>{post!.body}</p>
    </>
  )
}

export default Post
