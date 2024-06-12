'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

interface NavLink {
  href: string
  text: string
}

interface Props {
  links: NavLink[]
}

export const Navigation = ({ links }: Props) => {
  const pathname = usePathname()
  const session = useSession()

  console.log(pathname)

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link key={link.href} href={link.href} style={isActive ? { color: '#61DBFB' } : {}}>{link.text}</Link>
        )
      })}
      {session.data && <Link href="/profile" style={pathname === '/profile' ? { color: '#61DBFB' } : {}}>Profile</Link>}
      {session.data
        ? <Link href="/" onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Link>
        : <Link href="/api/auth/signin">Sign In</Link>
      }
    </>
  )
}
