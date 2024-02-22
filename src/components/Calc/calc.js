import React, { useState } from 'react';
import './calc.css';

const Calc = () => {
    const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };
  
    return (
      <div className="calculator">
        <div className='display'>
            {expression}
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick('sqrt')}>√</button>
          <button onClick={() => handleClick('%')}>%</button>
        </div>
      </div>
    );
  }
  
export default Calc;
