import './App.css';
import { useState } from 'react';

function PitStopCounter() {
  const [count, setCount] = useState(10001047);
  const [step, setStep] = useState(1000);

  const [counters, setCounters] = useState([{id: 1, value: 0, step: 10}, {id: 2, value: 0, step: 5}, {id: 3, value: 0, step: 50} ]);
  // increment a specific counter
  const handleIncrement = (id) => {
    setCounters(prev =>
      prev.map(counter =>
        counter.id === id
          ? { ...counter, value: counter.value + counter.step }
          : counter
      )
    );
  };

  // decrement a specific counter
  const handleDecrement =(id) =>{
    setCounters(prev => prev.map(counter => counter.id === id ? {...counter, value: counter.value-counter.step}: counter
    ));
  };

  //change step for specific counter
  const handleStepChange = (id, newStep) => {
    setCounters(counters.map(counter => counter.id === id ? {...counter, step: parseInt(newStep, 10) || 1} : counter));
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStep(isNaN(value) ? 1 : value);
  };

  return (
    <div className="f1-background">
      <div className="counter-panel">
        <img 
          src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2017/11/new-f1-logo.jpg" 
          alt="F1 Logo" 
          className="f1-logo"
        />
        <h2 className="counter-label">PITSTOP MULTI-COUNTER</h2>

        {counters.map(counter => (
          <div key={counter.id} style={{ marginBottom: '1.5rem' }}>
            <div className="counter-value">{counter.value}</div>
            <input
              className="counter-input"
              type="number"
              value={counter.step}
              onChange={(e) => handleStepChange(counter.id, e.target.value)}
            />
            <div className="button-group">
              <button className="increment" onClick={() => handleIncrement(counter.id)}>
                INCREMENT
              </button>
              <button className="decrement" onClick={() => handleDecrement(counter.id)}>
                DECREMENT
              </button>
            </div>
            <hr style={{ margin: '1rem 0', borderColor: '#ff4d00' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PitStopCounter;