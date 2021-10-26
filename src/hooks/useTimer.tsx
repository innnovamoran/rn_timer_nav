import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {TimerContext} from '../context/timer';

const useTimer = () => {
  const [lectureTimer, setLectureTimer] = useState<string>('00 : 00');

  const refInterval = useRef<NodeJS.Timer | null>(null);

  const {handleTime, minutes, seconds} = useContext(TimerContext);

  useEffect(() => {
    console.log('init timer');
    if (refInterval.current !== null) {
      clearInterval(refInterval.current);
    }
    refInterval.current = setInterval(() => {
      console.log('in loop');
      if (minutes > 0) {
        console.log('-m1');
        if (seconds === 0) {
          console.log('-m1-s1');
          handleTime({minutes: minutes - 1, seconds: 59});
        } else {
          console.log('-m1-s2');
          handleTime({minutes, seconds: seconds - 1});
        }
      } else {
        console.log('-s1');
        if (seconds <= 0) {
          console.log('overTime');
        } else {
          handleTime({minutes, seconds: -1});
        }
      }
    }, 1000);
    return () => {
      console.log('clean timer callback ');
      if (refInterval.current !== null) {
        clearInterval(refInterval.current);
      }
    };
  }, [minutes, seconds]);

  useEffect(() => {
    console.log({minutes, seconds});

    setLectureTimer(
      `${minutes < 10 ? `0${minutes}` : minutes} : ${
        seconds < 10 ? `0${seconds}` : seconds
      }`,
    );
  }, [minutes, seconds]);

  return {
    lectureTimer,
  };
};

export default useTimer;
