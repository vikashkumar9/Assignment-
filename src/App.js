import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Banner from './components/banner/Banner';
import Success from './components/success/Success';
import Connect from './components/connect/Connect';
import Believe from './components/Believe/Believe';
import ImageGalary from './components/ImageGalary/ImageGalary';
import About from './components/About/About';
import Global from './components/Global/Global';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <Success />
      <Connect />
      <Believe />
      <ImageGalary />
      <About />
      <Global />
      <Footer />
    </div>
  );
}

export default App;
