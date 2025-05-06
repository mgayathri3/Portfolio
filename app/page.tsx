import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BackgroundAnimation } from '@/components/background-animation';
import { Home } from '@/components/sections/home';
import { About } from '@/components/sections/about';
import { Portfolio } from '@/components/sections/portfolio';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundAnimation />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section id="home" className="min-h-screen flex items-center py-20">
          <Home />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>
        
        <section id="portfolio" className="min-h-screen py-20">
          <Portfolio />
        </section>
        
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}