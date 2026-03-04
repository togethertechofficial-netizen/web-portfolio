import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const totalFrames = 80;
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);

  useEffect(() => {
    // Preload ALL images immediately
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/images/BG/ezgif-frame-${frameNum}.jpg`;
      imagesRef.current[i] = img;
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      // Use FAQ section top as the animation endpoint so last frame lands at FAQ
      const faqSection = document.getElementById('faq');
      const endPoint = faqSection
        ? faqSection.offsetTop - window.innerHeight * 0.3 // complete just as FAQ enters view
        : document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = Math.min(1, Math.max(0, totalScroll / endPoint));
      targetScrollRef.current = scroll;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency

    // Handle High-DPI/Retina screens for crisp image quality
    const setupCanvas = () => {
      // Use devicePixelRatio for Retina display crispness
      const dpr = window.devicePixelRatio || 1;
      const logicalWidth = window.innerWidth;
      const logicalHeight = window.innerHeight;

      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;

      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;

      ctx.scale(dpr, dpr);
      canvas.logicalWidth = logicalWidth;
      canvas.logicalHeight = logicalHeight;
      // Turn off image smoothing for a sharper render if scaled
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    let animationFrameId;

    const render = () => {
      // Linear Interpolation (Lerp) for super smooth easing
      // current = current + (target - current) * smoothFactor
      // Lower smoothFactor = more delay/fluidity
      const ease = 0.05; // Tuned for smoother feeling

      currentScrollRef.current += (targetScrollRef.current - currentScrollRef.current) * ease;

      // Calculate which frame we should be showing
      const exactFrame = currentScrollRef.current * (totalFrames - 1) + 1;
      const currentFrameIndex = Math.min(totalFrames, Math.max(1, Math.round(exactFrame)));

      const img = imagesRef.current[currentFrameIndex];

      if (img && img.complete) {
        const logicalWidth = canvas.logicalWidth || window.innerWidth;
        const logicalHeight = canvas.logicalHeight || window.innerHeight;

        ctx.clearRect(0, 0, logicalWidth, logicalHeight);


        const canvasRatio = logicalWidth / logicalHeight;
        const imgRatio = img.width / img.height;

        let renderWidth = img.width;
        let renderHeight = img.height;
        let renderX = 0;
        let renderY = 0;

        if (canvasRatio > imgRatio) {
          renderHeight = img.width / canvasRatio;
          renderY = (img.height - renderHeight) / 2;
        } else {
          renderWidth = img.height * canvasRatio;
          renderX = (img.width - renderWidth) / 2;
        }

        ctx.drawImage(img, renderX, renderY, renderWidth, renderHeight, 0, 0, logicalWidth, logicalHeight);
      }
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setupCanvas);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-dark-bg text-light-text font-body selection:bg-accent-teal selection:text-dark-bg">
      {/* Background Canvas Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-[1px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-bg to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Header />

        <main className="w-full flex justify-center overflow-x-hidden pt-24">
          {/* Main Content Container */}
          <div className="w-full flex flex-col items-center">
            <Hero />

            {/* The rest of the sections */}
            <HowItWorks />

            <CaseStudies />

            <PricingSection />

            <Testimonials />

            <WhyChooseUs />

            <FAQ />

            <ContactSection />

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
