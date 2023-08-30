import useFetch from "./useFetch";
import weatherImages from "./ImageImport"
import Time from "./Time";
import SunTimes from "./SunTimes";
import usePosition from "./usePosition";

const WeatherInfo = () => {
  const { weatherData } = useFetch();
  const { lat, long } = usePosition();
  let isNightTime = false;
  let imageKey = null;

  if (weatherData) {
    const sunriseTime = weatherData.sys.sunrise * 1000;
    const sunsetTime = weatherData.sys.sunset * 1000;
    const currentTime = Date.now();

    isNightTime = currentTime > sunsetTime || currentTime < sunriseTime;

    const weather = weatherData.weather[0].main;

    if (weather === 'Clear') {
      imageKey = isNightTime ? 'clear n' : 'clear d';
    } else if (weather === 'Clouds') {
      if (weatherData.clouds.all >= 25) {
        imageKey = 'clouds';
      } else {
        imageKey = isNightTime ? 'clouds n' : 'clouds d';
      }
    } else if (weather === 'Thunderstorm') {
      imageKey = 'thunderstorm';
    } else if (weather === 'Rain') {
      imageKey = 'rain';
    } else if (weather === 'Drizzle') {
      imageKey = 'drizzle';
    } else if (weather === 'Snow') {
      imageKey = isNightTime ? 'snow n' : 'snow';
    } else {
      imageKey = 'atmosphere';
    }
  }

  return (
    <>
      {(weatherData && (lat && long)) ? (
        <div className="flex-col flex justify-center items-center">
          <Time />
          <h2 className="font-graphikRegular text-4xl mb-5">
            {weatherData.name + ', ' + weatherData.sys.country}
          </h2>
          <div className="font-graphikExtralight">
            <div className="flex text-7xl">
              <h2>{(weatherData.main.temp - 273.15).toFixed(0) + '°'}</h2>
              {imageKey && <img src={weatherImages[imageKey]} alt="Weather" className="h-20 w-20 ml-5" />}
            </div>
            <p className="text-2xl text-gray-100 font-graphikLight">
              {weatherData.weather[0].main}
            </p>
          </div>
          <p className="my-3 font-graphiklight text-2xl text-gray-100/75">
            {(weatherData.main.temp_max - 273.15).toFixed(0) + '° / ' + (weatherData.main.temp_min - 273.15).toFixed(0) + '°'}
          </p>

          <div className="gridbox w-full p-2 text-xl font-graphikRegular">
            <div className="grid grid-cols-2 gap-4 [&>div]:border [&>div]:rounded-xl [&>div]:border-gray-100 [&>div]:p-4 [&>div]:flex [&>div]:justify-between">
              <div>
                <p className="font-graphikMedium">Humidity: </p>
                <p>{weatherData.main.humidity + '%'}</p>
              </div>
              <div>
                <p className="font-graphikMedium">Wind:</p>
                <p>{weatherData.wind.speed + ' km/h / ' + weatherData.wind.deg + '°'}</p>
              </div>
              <div>
                <p className="font-graphikMedium">Feels Like:</p>
                <p>{(weatherData.main.feels_like - 273.15).toFixed(0) + '°'}</p>
              </div>
              <div>
                <p className="font-graphikMedium">Visibility:</p>
                <p>{(weatherData.visibility / 1000) + ' km'}</p>
              </div>
            </div>
          </div>

          <SunTimes data={weatherData} />
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center font-graphikRegular text-gray-100/75">Allow Access to Location</div>
      )}
    </>
  );
}

export default WeatherInfo;