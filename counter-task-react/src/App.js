
import './App.css';
import ReactDOM from "react-dom"
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
  }

  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {
    return (
      <div class="app">
        <div class="counter">10</div>
        <div class="controls">
          <button>INC</button>
          <button>DEC</button>
          <button>RND</button>
          <button>RESET</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App counter={0} />, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
export default App;
