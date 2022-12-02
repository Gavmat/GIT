
import { Component } from 'react';
import './employees-list-item.css';


class EmployeesListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            salary: this.props.salary,
        }
    }

    onSalaryChange = (e) => {

        const { onSalaryChange, name } = this.props;

        this.setState(({ salary }) => ({
            salary: e.target.value
        }));

        onSalaryChange(name, e.target.value)
    }

    render() {

        const { name, onDelete, onToggleIncrease, onToggleRise, increase, rise } = this.props;

        let classNames = "list-group-item d-flex justify-content-between ";
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleRise} >{name}</span>
                <input type="text" className="list-group-item-input" value={this.state.salary}
                    onChange={this.onSalaryChange} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

    }
}
export default EmployeesListItem;