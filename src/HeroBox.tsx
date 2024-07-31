import React from 'react';
import { useHistory } from 'react-router-dom';

interface HeroBoxProps {
  index: number;
  imgSrc: string;
  text: string;
  rank?: string;
}

const HeroBox: React.FC<HeroBoxProps> = ({ index, imgSrc, text, rank }) => {
  const history = useHistory();
  
  const handleClick = () => {
    history.push({
      pathname: '/Update',
      state: { index }
    });
  };

  return (
    <div onClick={handleClick} className="hero-box">
      {rank && <div className="rank">{rank}</div>} 
      <img src={imgSrc} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default HeroBox;
