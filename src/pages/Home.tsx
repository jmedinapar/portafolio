import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
