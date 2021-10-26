import React from 'react';
import TimerProvider from './src/context/timer';
import Navigation from './src/routes/navigation';

const App = () => (
  <TimerProvider>
    <Navigation />
  </TimerProvider>
);

export default App;
