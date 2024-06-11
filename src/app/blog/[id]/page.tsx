import { Metadata } from 'next'

interface Props {
  params: {
    id: string
  }
}

const getData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

  return await response.json()
}

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
  const post = await getData(id)

  return {
    title: post.title,
  }
}

const Post: React.FC<Props> = async ({ params: { id } }) => {
  const post = await getData(id)

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

export default Post
