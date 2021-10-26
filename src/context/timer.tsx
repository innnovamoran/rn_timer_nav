import React, {
  createContext,
  ReactNode,
  useReducer,
  FC,
  useEffect,
} from 'react';

type propsContext = {
  children: ReactNode;
};
type TimerState = {
  minutes: number;
  seconds: number;
};
type PropsReducerTimer = {type: string; payload: TimerState};
type TimerContextType = {
  minutes: number;
  seconds: number;
  handleTime: (payload: TimerState) => void;
};

export const TimerContext = createContext<TimerContextType>({
  minutes: 59,
  seconds: 59,
  handleTime: (payload: TimerState) => {},
});

const initStateTimer: TimerState = {
  minutes: 59,
  seconds: 59,
};

const reducerTimer = (
  state: TimerState,
  {payload, type}: PropsReducerTimer,
): TimerState => {
  switch (type) {
    case 'setTime':
      return {...state, ...payload};
    default:
      return state;
  }
};

const TimerProvider: FC<propsContext> = ({children}): JSX.Element => {
  const [{minutes, seconds}, dispatch] = useReducer(
    reducerTimer,
    initStateTimer,
  );

  const handleTime = (payload: TimerState): void =>
    dispatch({type: 'setTime', payload});

  return (
    <TimerContext.Provider value={{handleTime, minutes, seconds}}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
