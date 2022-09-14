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
            ],

            // пишем для строки поиска новое состояние. Дальше этот стейт мы используем в render 
            term: '',
            filter: 'all',
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

    // метод для поиска.В него входит 2 аргумента. Первый - строчка по которой мы будем искать
    // второй - массив данных который мы будем фильтровать. И нужно предуссомтреть разные 
    // ситуации - например, когда пользователь ввел что то в строку, а потом передумал ее и удалил

    searchEmp = (items, term) => {
        // если строка ничего не будет содержать, то мы ничего не делаем и возвращаем тот 
        // массив который пришел
        if (term.length === 0) {
            return items
        }
        // если условие не сработало то фильтруем массив.  Будем брать каждое свойство
        //  name в каждом из объектов и скать совпадение с строчкой term

        return items.filter(item => {
            // используем indexOf для обнаружение строчки.Это метод который позволяет искать подстройки
            // Если ничего не находит, возвращает - 1Если найдено, вернет индекс найденного елемента
            // В итоге вернется массив элементов подходящий под наш поиск.
            return item.name.indexOf(term) > -1
            //             Команда indexOf() возвращает индекс, если элементы найдены, в том числе и 0. 
            // А если не ничего не найдено - возвращает -1. Поэтому здесь из функции мы возвращаем результат сравнения
            //  поиска с -1. Если ничего не было найдено, то -1 > -1 вернет false, если найдено: 0 > -1 вернет true.
        })
    }


    // Создаем компонент -обновление поиска- и поднимаем состояние из search-panel
    // все что он будет делать - устанавливать состояние. Здесь мы не зависим от предыдущего 
    // состояния , поэтому передаем просто term. Потом передаем этот метод в компонент
    onUpdateSearch = (term) => {
        this.setState({ term: term })
        //    сокращенная запись объектов - this.setState({ term }) 
    }



    // как работает? Пользователь выбирает фильтр в локальном компоненте. Мы поднимаем его наверх. Фильтруем данные 
    // и отрисовываем на странице. Фильтр можно представить как обычную строку.Сначала это пустая строка, потом 
    // туда будет записываться выбранный фильтр. Из стейта вытаскиваем filter в render. и пишем метод для фильтрации
    // он принимает 2 аргумента - массив и выбранный фильтр.Их 3. поэтому используем switch
    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                // берем каждый элемент в массиве и возвращаем только те, у которых стоит rise в true 
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                // если оба фильтра не сработали, то сотавляем все как есть
                return items;
        }
        // как мы должны применять этот метод ? понятно - на переменно data.Но у нас уже есть такая сточка -
        // const visibleData = this.searchEmp(data, term); которая отображает visibleData и по которой идет поиск
        // скомбинируем. эта часть - this.searchEmp(data, term) возвращает уже отфильтрованный массив по поиску.
        // Одновременно с поиском у нас могут быть применены фильтры.Поэтому  в visibleData = this.filter() -
        //     этот метод принимает 2 части - (items, filter) - массив и фильтр и как массив мы помещаем это выражение;
        // const visibleData = this.filterPost(this.searchEmp(data, term),filter) - фильровать отфильтрованный массив
        // конечные данные которые мы будем отображать на странице проходят двойную фильтрацию.Сначала по поискуб потом
        // фильтрация по фильтрам.
    }
    // Те действия, которые объявляет пользователь называем с приставкой on
    // создаем действие внутрь компонента, которое выбирает фильтр. В него будет приходить какая то строка filter 
    // Изменяем в нашем состоянии текущий filter. И пережаем этот метод дальше в AppFilter - вниз по иерархии
    // далее обращаемся к пропсам и назначаем обработчик события

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }


    // Напишем метод по изменению зарплаты через инпут рядом с именем каждого сотрудника.

    // В employer-list - item  перепишес все на классовый компонент потому что есть стейт.
    // и напишем   соответствующую функцию.  
    //  onSalaryChange = (e) => {



    onSalaryChange = (name, salary) => {
        this.setState((state) => ({
            data: state.data.map(item => {
                if (item.name === name) {
                    return { ...item, salary }
                }
                return item;
            })
        }))
    }


    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        // Для того, чтобы посчитать сколько сотрудников идет на повышение, мы фильтруем массив data
        // filter вернет новый массив. Мы перебираем item и возвращаем только те, у кого будет
        //  increase в позиции true. И раз нам нужно получить количество этих сотрудников,
        // то с помощью length получаем их длину
        const increased = this.state.data.filter(item => item.increase).length;

        // Теперь нам нужно отобразить уже отфильтрованные данные в верстке. Если строка поиска будет-
        // пустая строка, то нам вернется первоначальный массив данных, ничего не произойдет, но если 
        // будет какая то фильтрация то эта переменная об этом узнает.
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo numberOfEmployees={employees}
                    numberOfIncreased={increased}
                />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    // помещаем для того, чтобы в props.filter в app-filter лежало название фильтра - all
                    // которое совпадает с одним из объектов в массиве buttonsData 

                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                    onSalaryChange={this.onSalaryChange}
                />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );

    }
}

export default App;
