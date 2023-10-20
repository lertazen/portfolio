import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: "Nathan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header className='block'>
          <Hero />
        </header>
        <Navbar />
        <main className='overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
