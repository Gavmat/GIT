import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import './app.css';


const App = () => {

    const data = [
        { name: 'John', salary: 1950, increase: false, id: 1 },
        { name: 'Paul', salary: 2000, increase: false, id: 2 },
        { name: 'Ringo', salary: 890, increase: true, id: 3 },
        { name: 'George', salary: 1700, increase: false, id: 4 },
    ];
    return (
        <div className='app'>
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;
