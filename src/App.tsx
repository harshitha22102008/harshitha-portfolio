import { Layout } from './components/Layout'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </Layout>
  )
}

export default App
