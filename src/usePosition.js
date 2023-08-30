import { useEffect, useState } from "react";


const usePosition = () => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });

        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)

    }, [lat, long])

    return { lat, long };
}
 
export default usePosition;