import { useState, useEffect } from "react"

function DigitalClock(){

    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        let interval=setInterval(()=>{
            setTime(new Date());
        },1000);

        // clean up if we unmount the digital clock
        return ()=>{
            clearInterval(interval);
        }
    },[]);

    function formatTime(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let second=time.getSeconds();
        const meridian = hours>=12? "PM":"AM";
        hours=hours%12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(second)} ${meridian}`;
    }

    function padZero(number){
        return (number<10?"0":"")+number;
    }

    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
        </>
    )
}
export default DigitalClock