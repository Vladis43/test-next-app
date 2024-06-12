import { Navigation } from '@/components/Navigation'

interface NavLink {
  href: string
  text: string
}

const navLinks: NavLink[] = [
  { href: '/', text: 'Home' },
  { href: '/blog', text: 'Blog' },
  { href: '/about', text: 'About' },
]

export const Header = () => (
  <header>
    <Navigation links={navLinks}/>
  </header>
)
