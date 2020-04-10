import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./style.css";

class EmpTable extends Component{
    state = {
        		currentSort: 'default'
        	}
            
    sortTypes = {
        up: {
            class: 'sort-up',
            fn: (a, b) => a.name.first.localeCompare(b.name.first)
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.name.first.localeCompare(a.name.first)
        },
        default: {
            class: 'sort',
            fn: (a, b) => b.registered.age - a.registered.age
        }
    }

    onSort = () => {
        const { currentSort } = this.state;
        let nextSort;
        
        if(currentSort === 'down') nextSort = 'default';
        else if(currentSort === 'up') nextSort = 'down';
        else nextSort = 'up';
        
        this.setState({
            currentSort: nextSort
        })
    }
    render() {
     return (
        this.props.data.length > 0 && (
            <table className='empDetail'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name &nbsp;&nbsp;
                        <button onClick={this.onSort}>
                            <FontAwesome className={"fas fa-${this.sortTypes[this.state.currentSort].class"} name='sort' />
 						</button></th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Location</th>
                        <th>Service Duration</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.data.sort(this.sortTypes[this.state.currentSort].fn).map(emp => (
                        <tr key = {emp.id.value }>
                            <td><img alt={emp.name.first}  src={emp.picture.thumbnail}/></td>
                            <td>{emp.name.first} {emp.name.last}</td>
                            <td>{emp.phone}</td>
                            <td><a href={emp.email}>{emp.email}</a></td>
                            <td>{new Date(emp.dob.date).toLocaleDateString()}</td>
                            <td>
                                <div>{emp.location.street.number} {emp.location.street.name}</div>
                                <div>{emp.location.city}, {emp.location.state}, {emp.nat}</div>
                            </td>
                            <td>{emp.registered.age}</td>
                        </tr>
                        ))}   
                </tbody>
            </table>
        )
     );
    }
}

export default EmpTable;