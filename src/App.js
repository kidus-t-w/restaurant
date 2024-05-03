import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Work from './Component/Work';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
