import { ArrowDown, Download, Eye } from 'lucide-react';
import heroImage from '@/assets/dinithi-hero.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This would link to the actual PDF resume
    console.log('Download resume functionality');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up animate">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="text-primary">Dinithi</span>{' '}
                <span className="inline-block animate-bounce">👋</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                IT Undergraduate | Aspiring Software Project Manager | Tech Enthusiast
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Passionate about building digital solutions and shaping the future of technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="btn-gradient inline-flex items-center gap-2"
              >
                <Eye className="h-5 w-5" />
                View My Work
              </button>
              <button
                onClick={downloadResume}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="fade-in-up animate lg:order-first order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6 scale-105"></div>
              <img
                src={heroImage}
                alt="Dinithi Bandaranayake"
                className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto lg:max-w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;