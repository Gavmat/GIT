import { Component } from 'react';
import './search-panel.css';

// Можно сразу вытащить из пропсов метод onUpdateSearch и повесить на onChange, но мы сделаем так
// чтобы компонент был управляемый - чтобы input нормально синхронизировался с локальным стейтом
// те будем не только передавать стейт наверх но и содержать внутри компонента. для этого создаем
// метод который назовем так же.
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        // создаем переменную которая будет получаться из event.target.value.Те когда срабатывает
        // событие мы получаем value которое ввел пользователь.
        const term = e.target.value;
        // устанавливаем сетстейт локального характера
        this.setState({ term });
        // теперь пробрасываем это состояние наверх. Делаем это при помощи проперти 
        // который к нам пришел и туда просто передаем строчку term,те то что ввел user 
        this.props.onUpdateSearch(term);
        // эти функции хоть и называются одинаково, но одна работает локально, а вторая приходит из другого
        // компонента и выполняет свою роль
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        )
    }
}

export default SearchPanel;