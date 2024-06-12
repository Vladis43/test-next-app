import { IPost } from '@/models/IPost'
import { create } from 'zustand'
import { getAllPosts, getPostsBySearch } from '@/services/getPosts'

interface UsePosts {
  posts: IPost[]
  loading: boolean
  getAllPosts: () => Promise<void>
  getPostsBySearch: (search: string) => Promise<void>
}

export const usePosts = create<UsePosts>()((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true })
    const posts = await getAllPosts()
    set({ loading: false, posts })
  },
  getPostsBySearch: async (search) => {
    set({ loading: true })
    const posts = await getPostsBySearch(search)
    set({ loading: false, posts })
  },
}))
