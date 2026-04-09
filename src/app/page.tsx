import Contact from '@/components/sections/Contact'
import Experience from '@/components/sections/Experience'
import Gallery from '@/components/sections/Gallery'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'

const Home = () => {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Gallery />
      <Contact />
    </main>
  )
}

export default Home
