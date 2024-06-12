'use client'
import { FormEvent, useState } from 'react'
import { usePosts } from '@/store'

export const PostSearch = () => {
  const [search, setSearch] = useState<string>('')
  const getPostsBySearch = usePosts(state => state.getPostsBySearch)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await getPostsBySearch(search)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  )
}
