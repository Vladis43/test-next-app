import { getServerSession } from 'next-auth'
import { authConfig } from '@/configs/auth'

export default async function Profile() {
  const session = await getServerSession(authConfig)

  console.log(session)

  return (
    <>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session?.user.image} alt="profile-image" width={100} height={100} />}
      <h3>{session?.user?.email}</h3>
    </>
  )
}
