import { Outlet } from 'react-router-dom'
import { Footer } from './Footer.jsx'
import { Navbar } from './Navbar.jsx'

export function Layout() {
  return (
    <div className="min-h-dvh bg-nx-bg text-nx-fg">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

