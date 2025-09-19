import React, { useState } from 'react';
import './Counter.css';

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(Math.max(0, initialCount));

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="counter-container" data-testid="counter-component">
      <div className="counter-card">
        <h2 className="counter-title">🔢 Counter</h2>
        <div className="count-display" data-testid="count-display">
          {count}
        </div>
        <div className="button-group">
          <button
            onClick={handleDecrement}
            disabled={count === 0}
            className={`btn btn-decrement ${count === 0 ? 'disabled' : ''}`}
            data-testid="decrement-btn"
            aria-label="Decrement"
          >
            ➖
          </button>
          <button
            onClick={handleIncrement}
            className="btn btn-increment"
            data-testid="increment-btn"
            aria-label="Increment"
          >
            ➕
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;