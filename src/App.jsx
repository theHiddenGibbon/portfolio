import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Intro from './pages/Intro';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <About />
        <Work />
        <Contact />
      </main>
    </>

  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);