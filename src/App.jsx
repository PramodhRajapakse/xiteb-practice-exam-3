import './App.css';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Services from './components/Services';
import Slider from './components/Slider';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Welcome from './components/Welcome';

function App() {

  return (
    <div className='flex'>
      <Header />
      <Slider />
      <Welcome />
      <Services />
      <Stats />
      <Testimonials />
      <Clients />
      <News />
      <Footer />
    </div>
  )
}

export default App
