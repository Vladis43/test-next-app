import { IPost } from '@/models/IPost'

export const getAllPosts = async (): Promise<IPost[]> => {
  const response = await fetch('/api/posts')

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

  return await response.json()
}

export const getPostsBySearch = async (search: string): Promise<IPost[]> => {
  const response = await fetch(`/api/posts?q=${search}`)

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

  return await response.json()
}

export const getPost = async (id: string): Promise<IPost> => {
  const response = await fetch(`/api/posts/${id}`)

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

  return await response.json()
}
