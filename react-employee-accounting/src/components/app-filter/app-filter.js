import "./app-filter.css";

// В этом компоненте не будет никакого состояния, потмоу что кнопка никакого value не содержит. На нее нажали,
//  она что то сделала, а эти действия мы передадим через пропсы.
// Когда кнопок много, особенно фильтров, они к нам приходят не в качестве верстки, а чаще всего расположены
// в каком то массиве данных.Так удобнее работать.Когда кнопки формируются из каких то данных.


const AppFilter = (props) => {
    // сформируем кнопки.
    const buttonsData = [
        { name: 'all', label: ' Все сотрудники' },
        { name: 'rise', label: ' На повышение' },
        { name: 'moreThen1000', label: '  З/П больше 1000$' },
    ];
    // на базе этих данных, мы можем сформировать массив элементов.

    const buttons = buttonsData.map(({ name, label }) => {
        // Создаем переменную в которой мы определяем активный элемент или нет. Те - где совпадает фильтр
        const active = props.filter === name;
        // Эта строчка заменяет условие что if props.filter = name, который приходит,  то в таком случае мы 
        // возвращаем true в active. В итоге в переменной active может быть true либо false. Оно один раз будет true
        // Теперь это значение используем чтобы сформировать класс. 
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>

        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div >

        // <div className="btn-group">
        //     <button type="button"
        //         className="btn btn-light">
        //         Все сотрудники
        //     </button>
        //     <button type="button"
        //         className="btn btn-outline-light">
        //         На повышение
        //     </button>
        //     <button type="button"
        //         className="btn btn-outline-light">
        //         З/П больше 1000$
        //     </button>
        // </div>
    )
}
export default AppFilter;