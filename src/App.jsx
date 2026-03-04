import React, { useEffect, useRef } from 'react';
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
import Snowfall from './components/Snowfall';

// Detect mobile once at module level (avoids repeated checks)
const isMobile = () => window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);

function App() {
  const totalFrames = 80;
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const mobileRef = useRef(isMobile());

  // ─── Preload all frames ───────────────────────────────────────
  useEffect(() => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/images/BG/ezgif-frame-${frameNum}.jpg`;
      imagesRef.current[i] = img;
    }

    const handleScroll = () => {
      const totalScroll = window.scrollY || document.documentElement.scrollTop;
      const faqSection = document.getElementById('faq');
      let endPoint = faqSection
        ? faqSection.offsetTop - window.innerHeight * 0.3
        : document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (endPoint <= 0) endPoint = 1; // Prevent division by zero

      targetScrollRef.current = Math.min(1, Math.max(0, totalScroll / endPoint));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run after a short delay to ensure elements are positioned on mobile
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ─── Animated render loop ──────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    // We store the last valid frame index to fallback if a frame is unloaded
    let lastDrawnFrame = 1;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const lw = window.innerWidth;
      const lh = window.innerHeight;
      canvas.width = lw * dpr;
      canvas.height = lh * dpr;
      canvas.style.width = `${lw}px`;
      canvas.style.height = `${lh}px`;
      ctx.scale(dpr, dpr);
      canvas.logicalWidth = lw;
      canvas.logicalHeight = lh;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    let animationFrameId;

    const render = () => {
      const ease = 0.05;

      // Safety check for NaN values
      if (isNaN(targetScrollRef.current)) targetScrollRef.current = 0;

      currentScrollRef.current += (targetScrollRef.current - currentScrollRef.current) * ease;
      const exactFrame = currentScrollRef.current * (totalFrames - 1) + 1;
      let frameIndex = Math.min(totalFrames, Math.max(1, Math.round(exactFrame)));

      // Find the best available frame
      let img = imagesRef.current[frameIndex];

      // On mobile devices, memory limits may unload full size images, leaving img.complete=true but naturalWidth=0
      if (!img || !img.complete || img.naturalWidth === 0) {
        // Fallback to the last successfully loaded frame
        img = imagesRef.current[lastDrawnFrame];
      } else {
        lastDrawnFrame = frameIndex;
      }

      if (img && img.complete && img.naturalWidth > 0) {
        const lw = canvas.logicalWidth || window.innerWidth;
        const lh = canvas.logicalHeight || window.innerHeight;
        ctx.clearRect(0, 0, lw, lh);

        const canvasRatio = lw / lh;
        const imgRatio = img.width / img.height;
        let rw = img.width, rh = img.height, rx = 0, ry = 0;
        if (canvasRatio > imgRatio) {
          rh = img.width / canvasRatio;
          ry = (img.height - rh) / 2;
        } else {
          rw = img.height * canvasRatio;
          rx = (img.width - rw) / 2;
        }
        ctx.drawImage(img, rx, ry, rw, rh, 0, 0, lw, lh);
      }
      animationFrameId = window.requestAnimationFrame(render);
    };

    // Draw the first frame ASAP
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
        <div className="absolute inset-0 bg-dark-bg/75 backdrop-blur-[1px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-bg to-transparent"></div>
      </div>

      {/* Snowfall Layer */}
      <Snowfall />

      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Header />

        <main className="w-full flex justify-center overflow-x-hidden pt-24">
          <div className="w-full flex flex-col items-center">
            <Hero />
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
