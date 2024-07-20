import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (num1 === '' && num2 === '') {
      setError('Number fields cannot be empty');
      return false;
    }
    if (num1 === '') {
      setError('Num1 cannot be empty');
      return false;
    }
    if (num2 === '') {
      setError('Num2 cannot be empty');
      return false;
    }
  
    if (isNaN(num1) || isNaN(num2)) {
      setError('Inputs must be valid numbers');
      return false;
    }
    setError('');
    return true;
  };

  const handleCalculation = (operation) => {
    if (!validateInputs()) return;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let result;
    switch (operation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          setError('Cannot divide by zero');
          return;
        }
        result = number1 / number2;
        break;
      default:
        return;
    }

    setResult(result);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleCalculation('+')}>+</button>
        <button onClick={() => handleCalculation('-')}>-</button>
        <button onClick={() => handleCalculation('*')}>*</button>
        <button onClick={() => handleCalculation('/')}>/</button>
      </div>
      {error && <div className="error">{error}</div>}
      {result !== null && !error && (
        <div className="success">Result: {result}</div>
      )}
    </div>
  );
}

export default App;
