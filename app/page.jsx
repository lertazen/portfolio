import About from './components/About';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className='relative w-full'>
      <Projects />
      <About />
    </div>
  );
}
