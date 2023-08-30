import WeatherInfo from "./WeatherInfo";

const WeatherCard = () => {
    return (
        <div className="p-8 m-10 w-full max-w-screen-sm text-3xl rounded-xl border border-gray-100">
            <WeatherInfo />
        </div>
    );
}

export default WeatherCard;