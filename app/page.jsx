import Image from 'next/image';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className='relative w-full projects_bg'>
      <Projects />
    </div>
  );
}
