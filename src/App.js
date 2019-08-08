import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {

  function incrementBall() {
    setCounts({ ...counts, ball: counts.ball + 1 })
  }

  function incrementStrike() {
    setCounts({ ...counts, strike: counts.strike + 1 })
  }

  function incrementFoul() {
    setCounts({ ...counts, strike: counts.strike + 2 })
  }

  function incrementHit() {
    setCounts({ ...counts, ball: counts.ball = 0 })
    setCounts({ ...counts, strike: counts.strike = 0 })
  }

  const [counts, setCounts] = useState({ ball: 0, strike: 0 });


  return (
    <div className="container">
      <Display counts={counts} />
      <Dashboard
        incrementBall={incrementBall}
        incrementStrike={incrementStrike}
        incrementFoul={incrementFoul}
        incrementHit={incrementHit} />
    </div>

  );
}

export default App;
