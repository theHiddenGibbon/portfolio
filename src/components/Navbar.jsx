import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const SCROLL_DELTA = 30;

function scrollToSection(id, setHidden, setForceHidden, lastActionScroll, justClicked, lockout) {
  if (id === 'intro') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHidden(false);
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    justClicked.current = true;
    lockout.current = true;
    el.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      setHidden(true);
      setForceHidden(true);
      lastActionScroll.current = window.scrollY;
      justClicked.current = false;
      setTimeout(() => {
        lockout.current = false;
      }, 700);
    }, 600);
  }
}

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [forceHidden, setForceHidden] = useState(false);
  const lastScroll = useRef(window.scrollY);
  const lastActionScroll = useRef(window.scrollY);
  const justClicked = useRef(false);
  const lockout = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const navbar = document.querySelector('.navbar');
      let pastAbout = false;
      if (aboutSection && navbar) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const navbarRect = navbar.getBoundingClientRect();
        pastAbout = aboutRect.top <= navbarRect.bottom;
      }

      if (!pastAbout) {
        setHidden(false);
        setForceHidden(false);
        lastScroll.current = window.scrollY;
        lastActionScroll.current = window.scrollY;
        return;
      }

      if (forceHidden) {
        const currentScroll = window.scrollY;
        if (currentScroll < lastScroll.current && !lockout.current) {
          setHidden(false);
          setForceHidden(false);
          lastActionScroll.current = currentScroll;
          lastScroll.current = currentScroll;
          return;
        }
        setHidden(true);
        lastScroll.current = currentScroll;
        return;
      }

      if (justClicked.current) {
        setHidden(true);
        return;
      }

      const currentScroll = window.scrollY;
      if (
        currentScroll > lastScroll.current &&
        currentScroll > 50
      ) {
        setHidden(true);
        lastActionScroll.current = currentScroll;
      } else if (
        currentScroll < lastScroll.current
      ) {
        setHidden(false);
        lastActionScroll.current = currentScroll;
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceHidden]);

  return (
    <nav className={`navbar${hidden ? ' navbar--hidden' : ''}`}>
      <ul className="navbar-links">
        <li>
          <button onClick={() => scrollToSection('intro', setHidden, setForceHidden, lastActionScroll, justClicked, lockout)}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about', setHidden, setForceHidden, lastActionScroll, justClicked, lockout)}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('work', setHidden, setForceHidden, lastActionScroll, justClicked, lockout)}>Work</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact', setHidden, setForceHidden, lastActionScroll, justClicked, lockout)}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;