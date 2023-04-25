import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Coaches, Teams } from './App';
interface Props {
  coach: Coaches;
  teams: Teams;
  shuffleTeams: (coach: Coaches) => void;
}
function TeamShuffle({ coach, teams, shuffleTeams }: Props) {

  return (
    <div style={{ width: '100%', border: '1px solid grey' }}>
      <div>
        {
          teams[coach].map((team, index) => (
            <div className='text-center' key={index}>
              <p className='big-font'>{team},</p>
            </div>
          ))
        }
      </div>
      <div>
        <button className='button' onClick={() => shuffleTeams(coach)}>팀 섞기</button>
      </div>

    </div>
  );
}

export default TeamShuffle;
