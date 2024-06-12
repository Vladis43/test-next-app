import posts from '../posts.json'
import { NextResponse } from 'next/server'

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  const { id } = params

  const post = posts.find((post) => String(post.id) === String(id))

  return NextResponse.json(post)
}
