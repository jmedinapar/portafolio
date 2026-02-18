import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
// import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Hero />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
};

export default Home;
