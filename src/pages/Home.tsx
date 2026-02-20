import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Hero />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
