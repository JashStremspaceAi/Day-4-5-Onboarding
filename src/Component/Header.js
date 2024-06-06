// src/components/Header.js

import React from 'react';

const Header = ({ onSelectDifficulty }) => {
  return (
    <div className="header">
      <div>Memory Game</div>
      <div>
        <button onClick={() => onSelectDifficulty('easy')}>Easy</button>
        <button onClick={() => onSelectDifficulty('medium')}>Medium</button>
        <button onClick={() => onSelectDifficulty('hard')}>Hard</button>
      </div>
    </div>
  );
};

export default Header;
