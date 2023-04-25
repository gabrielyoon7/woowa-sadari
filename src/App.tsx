import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamShuffle from './TeamShuffle';

export type Coaches = 'gong1' | 'cron';
export type Teams = Record<Coaches, string[]>;

function App() {
  const [teams, setTeams] = useState<Teams>({
    gong1: ['가브리엘', '고니', '노아', '룩소', '세인', '센트', '슬링키', '아커', '유스', '참새', '해온', '황펭'],
    cron: ['요술토끼', '패트릭', '가람', '라잇', '우디', '루루', '우스', '쵸파', '윤생', '에디', '도리', '노아이즈']
  });

  const shuffleTeams = (coach: Coaches) => {
    const sortedTeam = [...teams[coach]].sort(() => Math.random() - 0.5);
    const newTeams = { ...teams, [coach]: sortedTeam }
    setTeams(newTeams);
  }

  return (
    <div style={{ display: 'flex' }}>
      <TeamShuffle coach='gong1' teams={teams} shuffleTeams={shuffleTeams} />
      <TeamShuffle coach='cron' teams={teams} shuffleTeams={shuffleTeams} />
    </div>
  );
}

export default App;
