import { useEffect, useState } from 'react';
import './Intro.css';

const Intro = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [borderIn, setBorderIn] = useState(false);
  const [borderBulge, setBorderBulge] = useState(false);
  const [fade, setFade] = useState(0);

useEffect(() => {
  setBorderIn(true);
  setBorderBulge(true);
  const bulgeTimer = setTimeout(() => setBorderBulge(false), 500);
  const firstTimer = setTimeout(() => setShowFirst(true), 500);
  const secondTimer = setTimeout(() => setShowSecond(true), 3000);
  return () => {
    clearTimeout(bulgeTimer);
    clearTimeout(firstTimer);
    clearTimeout(secondTimer);
  };
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById('about');
      if (!about) return;
      const aboutRect = about.getBoundingClientRect();
      const fadeStart = window.innerHeight * 0.5;
      const fadeEnd = window.innerHeight * 0.3;
      const progress = (fadeStart - aboutRect.top) / (fadeStart - fadeEnd);
      const fadeValue = Math.min(Math.max(progress, 0), 1);
      setFade(fadeValue);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseWidth = 5 * (1 - fade);
  const borderWidth = borderIn
    ? borderBulge
      ? `clamp(0px, ${baseWidth * 1.7}px, 10px)`
      : `clamp(0px, ${baseWidth}px, 5px)`
    : '0px';

  return (
    <section
      className="intro-section"
      id="intro"
      style={{
        opacity: 1 - fade,
        pointerEvents: fade === 1 ? 'none' : 'auto',
        transition: 'opacity 0.1s'
      }}
    >
      <div
        className="intro-content"
        style={{
          borderLeft: `${borderWidth} solid black`,
          transition: 'border-left-width 0.5s cubic-bezier(.4,1.7,.6,1), opacity 0.1s',
          transitionDelay: borderIn ? '0.1s' : '0s',
        }}
      >
        <div className="intro-line-wrapper">
          <span className={"intro-line first" + (showFirst ? " intro-line-visible" : "")}>
            Hi, I'm Jim!
          </span>
        </div>
        <div className="intro-line-wrapper">
          <span className={"intro-line second" + (showSecond ? " intro-line-visible" : "")}>
            I'm currently seeking my first professional UX, UI, or web design role.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Intro;