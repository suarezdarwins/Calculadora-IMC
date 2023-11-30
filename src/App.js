import React, { useState } from 'react';
import './App.css'; // Puedes utilizar un archivo CSS para los estilos

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    // Validación de entradas
    if (!weight || !height) {
      alert('Por favor, ingrese peso y altura.');
      return;
    }

    // Cálculo del IMC
    const bmi = (weight / (height * height)).toFixed(2);
    setResult(bmi);
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Altura (m):</label>
        <input
          type="number"
          value={height}
          step="0.01"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calcular</button>
      {result && <p>Tu índice de masa corporal es: {result}</p>}
    </div>
  );
}

export default App;
