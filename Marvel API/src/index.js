import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelServiсe';

import './style/style.scss';

// Чтобы работать с классами, нужно создать его экземпляр.
// в этой переменной будет храниться потомок класса MarvelService
// const marvelService = new MarvelService();

// обращаемся к этой переменнойб запустить метод getAllCharacters.
// ставим then - потому что в  return await res.json(); возвращается промис.
// В ней кол бэк функуия которая принимает в себя аргумент res.

// marvelService.getAllCharacters().then(res => res.data.results.forEach(item =>
//   console.log(item.name)));



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

