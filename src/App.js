import React from 'react'
import './reset.css'
import './App.css'
import Card from './components/layout/Card'
import NumeroAleatorio from './components/NumeroAleatorio';
import PrimeiroComponente from './components/PrimeiroComponente'
function App() {
  return (
    <>
      <PrimeiroComponente />
      <div className="cards">
        <Card title="Exemplo de card" color="#B9ED8E">
          <NumeroAleatorio max={100} min={10}/>
        </Card>
        <Card title="Exemplo de card" color="#BEDEED">
          <NumeroAleatorio max={100} min={10}/>
        </Card>
        <Card title="Exemplo de card" color="#E68EED">
          <NumeroAleatorio max={100} min={10}/>
        </Card>
        <Card title="Exemplo de card" color="#EDC79A">
          <NumeroAleatorio max={100} min={10}/>
        </Card>
      </div>
      
    </>
  );
}

export default App;
