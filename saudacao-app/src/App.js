import React, { useState } from 'react';
import InputComponent from './components/InputComponent';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <h1>Saudação Personalizada</h1>
      <InputComponent value={name} onChange={(e) => setName(e.target.value)} />
      <p>Olá, {name}!</p>
    </div>
  );
}

export default App;
