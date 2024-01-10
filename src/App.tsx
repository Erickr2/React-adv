import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Navigation } from './routes/navigation';

export const App = ( ) => {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navigation />
    </>
  )
}

