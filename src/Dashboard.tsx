import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import HeroBox from './HeroBox';
import { Hero } from './types';

interface DashboardProps {
  heroes: Hero[];
}

const Dashboard: React.FC<DashboardProps> = ({ heroes }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-buttons">
        <Link to="/View">
          <button>Heroes</button>
        </Link>
      </div>
      <div className="line">
        {heroes.slice(0, 4).map((hero, index) => (
          <div key={index} className={`hero-box ${getHeroBoxClass(index)}`}>
            <HeroBox {...hero} index={index} rank={`#${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function getHeroBoxClass(index: number): string {
  switch (index) {
    case 0:
      return 'first';
    case 1:
      return 'second';
    case 2:
      return 'third';
    case 3:
      return 'fourth';
    default:
      return '';
  }
}

export default Dashboard;
