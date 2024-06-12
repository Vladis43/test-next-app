'use client'
import { FormEvent, useState } from 'react'
import useSWR from 'swr'
import { getPostsBySearch } from '@/services/getPosts'

export const PostSearch = () => {
  const [search, setSearch] = useState<string>('')
  const { mutate } = useSWR('posts')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const posts = await getPostsBySearch(search)
    await mutate(posts)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  )
}
