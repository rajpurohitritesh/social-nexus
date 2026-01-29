import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { About } from './pages/About.jsx'
import { Blog } from './pages/Blog.jsx'
import { Contact } from './pages/Contact.jsx'
import { Home } from './pages/Home.jsx'
import { Portfolio } from './pages/Portfolio.jsx'
import { Process } from './pages/Process.jsx'
import { Services } from './pages/Services.jsx'
import { Testimonials } from './pages/Testimonials.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
