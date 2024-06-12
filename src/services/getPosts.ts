import { IPost } from '@/models/IPost'

export const getAllPosts = async (): Promise<IPost[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

  return await response.json()
}

export const getPostsBySearch = async (search: string): Promise<IPost[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

  return await response.json()
}
