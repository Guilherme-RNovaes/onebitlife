import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/Routes';

function App() {
  return (
    <>
      <Status barStyle={"auto"} />
      <Routes />
    </>
  )
}

export default App
