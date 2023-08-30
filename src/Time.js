import { useEffect, useState } from "react";

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    const months = [
        'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.',
        'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ];

    const month = months[currentTime.getMonth()];
    const day = currentTime.getDate();
    const hours = currentTime.getHours() % 12 || 12;
    const minutes = currentTime.getMinutes();
    const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';

    
    return (  
        <>
            <p className="font-graphikRegular text-xl text-gray-100/75 mb-2">
                {month} {day}, {hours}:{minutes < 10 ? '0' : ''}{minutes} {ampm}
            </p>
        </>
    );
}
 
export default Time;