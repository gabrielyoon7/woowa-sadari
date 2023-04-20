import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teams, setTeams] = useState(['가브리엘', '고니', '노아', '룩소', '세인', '센트', '슬링키', '아커', '유스', '참새', '해온', '황팽']);
  const shuffleTeams = () => {
    setTeams([...teams].sort(() => Math.random() - 0.5));
  }

  return (
    <div>
      <div>
        <h1>{teams.join(', ')}</h1>
      </div>
      <div>
        <button onClick={shuffleTeams}>팀 섞기</button>
      </div>

    </div>
  );
}

export default App;
