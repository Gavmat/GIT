
import { Component } from 'react';
import './employees-add-form.css';


// Этот компонент, когда работает с инпутами проходит след этапы:
// Импут запускает событие Onchange
// запускает метод onValueChangeб и setState в нем изменяет состояние и записывает в стейт.
// setState запускает render, чтобы перерисовать состояние компонента и усли value стоит в том же ключе что и стейт
// то в value записывается актуальное значение этого компонента.

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }
    //     Навешиваем обработчик события на input Onchange. В него входит метод onValueChange.
    // Когда событие срабатывает мы берем то, что написано внутри инпута(те это event.target.value)
    // и записываем это в нужный стейт
    // Метод принимает аргумент объекта события event 
    onValueChange = (e) => {
        const { name, value } = e.target
        this.setState({
            // таким образом мы можем достучаться до атрибута name на котором происходит событие
            // [e.target.name]: e.target.value и он будет заменен на строку которая 
            // записана в атрибуте и заменен на стейт

            [name]: value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // условие, чтобы невозможно было добавлять пустого пользователя 
        if (this.state.name.length < 2 || !this.state.salary) return;

        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        return (
            <div className="app-add-form" >
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.handleSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        //     value со значением стейта добавляется для того, чтобы react рендерил форму и
                        // контролировал ее поведение на пользовательский ввод
                        value={this.state.name}
                        placeholder="Как его зовут?"
                        name='name'
                        // называем так, чтобы эти названия атрибута совпадали с 
                        // названием стейта. Тогда в метода можно записать 
                        // e.target.name: e.target.value
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        value={this.state.salary}
                        placeholder="З/П в $?"
                        name='salary'
                        onChange={this.onValueChange} />

                    <button type="submit"

                        className="btn btn-outline-light"

                    >Добавить</button>
                </form>
            </div >
        )

    }
}

export default EmployeesAddForm;