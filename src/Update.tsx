import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Update.css';
import { Hero } from './types';

interface LocationState {
  index: number;
}

interface UpdateProps {
  heroes: Hero[];
  setHeroes: React.Dispatch<React.SetStateAction<Hero[]>>;
}

const Update: React.FC<UpdateProps> = ({ heroes, setHeroes }) => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { index } = location.state;
  const [newText, setNewText] = useState<string>('');

  useEffect(() => {
    if (heroes[index]) {
      setNewText(heroes[index].text);
    }
  }, [index, heroes]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedHeroes = [...heroes];
    updatedHeroes[index].text = newText;
    setHeroes(updatedHeroes);
    history.push('/View');
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <label htmlFor="text">Updated Caption:</label>
      <input
        id="text"
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default Update;
