import {useState,useEffect} from "react";
import styles from "./styles.module.css";


let intervalID:any = null;
let lastMinute:any = null;
let lastSecond:any = null;

function startTimer(duration:any, display:any) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        lastMinute = minutes;
        lastSecond = seconds;

        display(minutes + ":" + seconds); 

        if (diff <= 0) {
            clearInterval(intervalID);
            display("00:00")
        }
    };
    timer();
    intervalID = setInterval(timer, 1000);
}

const PomodoroTimer = () => {


    const [minutes,setMinutes] = useState(25)
    const [timeString,setTimeString] = useState(`${minutes}:00`)
    const [started,setStarted] = useState(false)
    const [onPause,setOnPause] = useState(false)


    const pauseTimer = () => {
        setOnPause(true);
        if(intervalID) {
            clearInterval(intervalID)
            intervalID = null;
        }
    }

    const continueTimer = () => {
        setOnPause(false);
        startTimer(lastMinute * 60 + lastSecond,setTimeString)
    }

    const initTimer = () => {
        startTimer(minutes*60,setTimeString)
        setStarted(true)
    }

    const skipTimer = () => {
        clearInterval(intervalID)
        setStarted(false)
        setOnPause(false)
        setTimeString(`${minutes}:00`)
    }

    const sumMin = () => {
        if(minutes <= 59){
            setMinutes(minutes + 1)
            setTimeString(`${minutes + 1}:00`)
        }
    }

    const subMin = () => {
        if(minutes > 1){
            setMinutes(minutes - 1)
            setTimeString(`${minutes - 1}:00`)
        }
    }

    useEffect(() => {
        lastMinute = minutes;
        lastSecond = 0;
        return() => {
            if(intervalID){
                clearInterval(intervalID)
            }
        }
    },[])

    return(
        <div className={styles.container} >
            <div className={styles.timer} >
                {started === false && (
                    <div className={styles.carets} >
                        <i className={`fas fa-caret-up ${styles.caretsIcons}`} onClick={sumMin} ></i>
                        <i className={`fas fa-caret-down ${styles.caretsIcons}`} onClick={subMin} ></i>
                    </div>
                )}
                <p>{timeString}</p>
            </div>
            <div className={styles.buttons} >
                {started ?  (
                        <>
                            {onPause ? <button className={styles.pause_btn} onClick={continueTimer} >CONTINUE</button> : <button className={styles.pause_btn} onClick={pauseTimer}>PAUSE</button>}
                            <button className={styles.skip_btn} onClick={skipTimer} >SKIP</button>
                        </>
                    ) :
                    <button 
                        className={styles.pause_btn}
                        onClick={initTimer}
                    >START</button>
                }
            </div>
        </div>
    )
}

export default PomodoroTimer;