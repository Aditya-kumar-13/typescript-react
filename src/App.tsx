import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import View from './View';
import Update from './Update';
import { Hero } from './types';

const App: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>(() => {
    const savedHeroes = localStorage.getItem('heroes');
    return savedHeroes ? JSON.parse(savedHeroes) : [
      { imgSrc: '/public/dr.jpeg', text: 'Dr. Strange' },
      { imgSrc: '/public/Witch.jpg', text: 'Captain' },
      { imgSrc: '/public/aqua.jpeg', text: 'Hulk' },
      { imgSrc: '/public/goku.jpg', text: 'Spider' },
      { imgSrc: '/public/bat.jpeg', text: 'Batman' },
      { imgSrc: '/public/super.jpg', text: 'Superman' },
      { imgSrc: '/public/buri.jpeg', text: 'Buri Buri Zaimon' },
      { imgSrc: '/public/thor.jpeg', text: 'Thor' },
      { imgSrc: '/public/LOKI.jpg', text: 'Loki' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('heroes', JSON.stringify(heroes));
  }, [heroes]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Dashboard heroes={heroes} />} />
          <Route path="/View" render={() => <View heroes={heroes} />} />
          <Route path="/Update" render={() => <Update heroes={heroes} setHeroes={setHeroes} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
