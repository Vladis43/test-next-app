'use client'
import { FormEvent, useState } from 'react'
import { getPostsBySearch } from '@/services/getPosts'
import { IPost } from '@/models/IPost'

interface Props {
  onSearch: (posts: IPost[]) => void
}

export const PostSearch = (props: Props) => {
  const [search, setSearch] = useState<string>('')
  const { onSearch } = props

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const posts = await getPostsBySearch(search)
    onSearch(posts)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  )
}
