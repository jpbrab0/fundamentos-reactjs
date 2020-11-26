import React from 'react'
import NumeroAleatorio from './components/NumeroAleatorio';
import PrimeiroComponente from './components/PrimeiroComponente'
function App() {
  return (
    <>
      <PrimeiroComponente />
      <NumeroAleatorio max={100} min={10}/>
    </>
  );
}

export default App;
