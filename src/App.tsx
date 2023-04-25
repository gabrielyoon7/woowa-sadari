import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teams, setTeams] = useState(['가브리엘', '고니', '노아', '룩소', '세인', '센트', '슬링키', '아커', '유스', '참새', '해온', '황펭']);
  const shuffleTeams = () => {
    setTeams([...teams].sort(() => Math.random() - 0.5));
  }

  return (
    <div>
      <div>
        {
          teams.map((team, index) => (
            <div className='text-center' key={index}>
              <p className='big-font'>{team},</p>
            </div>
          ))
        }
      </div>
      <div>
        <button className='button' onClick={shuffleTeams}>팀 섞기</button>
      </div>

    </div>
  );
}

export default App;
