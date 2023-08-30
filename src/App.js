import './App.css';
import icon from './weather/clouds d.svg'
import Footer from './Footer';
import WeatherCard from './WeatherCard';

function App() {
  return (
    <div className='text-white flex flex-col bg-background items-center justify-between max-h-screen'>
      <h2 className='flex mt-7 font-graphikBold text-4xl'>
        <img src={icon} alt="icon" className='h-9 mx-3' /> Weather App
      </h2>
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;
