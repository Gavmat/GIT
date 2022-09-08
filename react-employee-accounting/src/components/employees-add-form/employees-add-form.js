
import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })


    }

    handleSubmit = (e) => {

        e.preventDefault();

        console.log(`Form submitted`);

    }


    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.handleSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        value={this.state.name}
                        placeholder="Как его зовут?"
                        name='name'
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
            </div>
        )

    }
}

export default EmployeesAddForm;