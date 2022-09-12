import React from 'react';
import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John', salary: 1950, increase: false, rise: false, id: 1 },
                { name: 'Paul', salary: 2000, increase: false, rise: false, id: 2 },
                { name: 'Ringo', salary: 890, increase: true, rise: true, id: 3 },
                { name: 'George', salary: 1700, increase: false, rise: false, id: 4 }
            ]

        }
        this.maxId = 5;

    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }




    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });

        //    тоже самое // this.setState({ data: [...this.state.data, newItem] });
    }

    // сейчас напишем метод изменяет параметр на противоположный у определенного элемента. 
    // Для него нужен определенный идентификатор по которому мы будем определять наш объект

    onToggleIncrease = (id) => {
        this.setState(({ data }) => ({
            // (({ data }) => ({}) это тоже самое что
            // (({data}) => {
            //     return {}
            //  }

            // здесь, в setState сразу возвращается объект у которого будет свойство data.Data - это массив
            // и если мы применим к нему метод map, то сформируем новый массив. Item - каждый отдельный обхект
            // внутри нашего массива. И когда этот колбэк проходит по каждому из наших объектов внутри data,
            // то мы можем использовать условие - если каждый id внутри этого объекта совпал с id который к нам
            //  пришел внутри методаб те мы нашли объект который хотим изменитьб то мы из колбэк функции запускаем еще один 
            //  return. Будем возвращать новый объект. И в этот объект мы включаем все свой ства которые были до 
            // этого и поделючаем increase: !item.increase
            // Ещё раз.Мы знаем, что объект setStatа  напрямую мы менять не можем.Поэтому мы возвращаем новый объект
            // у которого будет свойство data в котором будет формироваться новый массив.Когда идет перебор объектов
            // и если совпали id, то значит, что мы нашли нужный нам объект.В таком случае мы будем возвращать новый обхект
            // который содержит сущность increase. Если условие increase: !item.increase не совпало, то мы  просто 
            // возвращаем объект. И как итог - мв получим массив объектов только с одним измененным
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item;
            })
        }))

    }
    // этот метод отвечает за переключение состояния сотрудника который идет на повышение
    // далее  эти методы нужно пробросить вниз в EmployersList. onToggleRise={this.onToggleRise}
    // В EmployersList выстаскиваем их из propsов const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
    // далее идем в EmployeesListItem и выстаскиваем из пропсов 
    // render() {
    //     const { name, salary, onDelete, onToggleIncrease,onToggleRise } = this.props;

    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, rise: !item.rise }
                }
                return item;
            })
        }))

    }
    // ЗАГОТОВКА!
    // Эти 2 метода onToggleIncrease и onToggleRise похожи, поэтому их можно объеденить.
    // В onToggleProp мы  будем менять не какое то конкретное свойство, а рандомноеб которое 
    // сюда мы будем передавать как второй аргумент - первый - уникальный идентификатор,
    // второй - что мы будем менять. Далее мы удаляем один из двух onToggleRise={this.onToggleRise}
    // а первый меняем на  onToggleIncrease = { this.onToggleProp }

    // onToggleProp = (id, prop) => {
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, [prop]: !item.[prop] }
    //             }
    //             return item;
    //         })
    //     }))

    // }







    render() {
        const employees = this.state.data.length;
        // Для того, чтобы посчитать сколько сотрудников идет на повышение, мы фильтруем массив data
        // filter вернет новый массив. Мы перебираем item и возвращаем только те, у кого будет
        //  increase в позиции true. И раз нам нужно получить количество этих сотрудников,
        // то с помощью length получаем их длину
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className='app'>
                <AppInfo numberOfEmployees={employees}
                    numberOfIncreased={increased}
                />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );

    }
}

export default App;
