const SunTimes = ({ data }) => {
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="mt-8 px-2 flex justify-between w-full font-graphikLight">
            { data && (
                <>
                    <p>Sunrise: {sunriseTime}</p>
                    <p>Sunset: {sunsetTime}</p>
                </>
            )}  
        </div>  
    );
}
 
export default SunTimes;