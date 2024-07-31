import React from 'react';
import { Link } from 'react-router-dom';
import './View.css';
import HeroBox from './HeroBox';
import { Hero } from './types';

interface ViewProps {
  heroes: Hero[];
}

const View: React.FC<ViewProps> = ({ heroes }) => {
  return (
    <div className="view-container">
      <div className="view-buttons">
        <Link to="/">
          <button>Dashboard</button>
        </Link>
      </div>
      <div className="view">
        {heroes.map((hero, index) => (
          <div key={index} className="hero-box">
            <HeroBox
              {...hero}
              index={index}
              rank={index < 9 ? `` : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default View;
