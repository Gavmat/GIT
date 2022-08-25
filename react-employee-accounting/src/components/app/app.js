import React from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesListItem from '../employees-list-item/employees-list-item';
import SearchPanel from '../search-panel/search-panel';
import './app.css';


const App = () => {
    return (
        <div className='app'>
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesListItem />
        </div>
    );
}

export default App;
