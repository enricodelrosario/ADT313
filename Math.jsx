import React, { useState } from 'react';

const Math = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(parseInt(num1) + parseInt(num2));
  const handleSubtraction = () => setResult(parseInt(num1) - parseInt(num2));

  return (
    <div style={{ margin: '20px' }}>
      <h2>Math Operations</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      {result !== null && (
        <p>Result: {result}</p>
      )}
    </div>
  );
};

export default Math;