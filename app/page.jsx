import Image from 'next/image';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className='relative'>
      <Projects />
    </div>
  );
}
