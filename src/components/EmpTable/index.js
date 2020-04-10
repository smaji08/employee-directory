import React from "react";
import "./style.css";

function EmpTable(props){
    return (
        props.data.length > 0 && (
            <table className='empDetail'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                        {props.data.map(emp => (
                        <tr key = {emp.id.value }>
                            <td><img alt={emp.name.first}  src={emp.picture.thumbnail}/></td>
                            <td>{emp.name.first} {emp.name.last}</td>
                            <td>{emp.phone}</td>
                            <td><a href={emp.email}>{emp.email}</a></td>
                            <td>{new Date(emp.dob.date).toLocaleDateString()}</td>
                            <td>{emp.location.city}, {emp.location.state}, {emp.nat}</td>
                        </tr>
                        ))}   
                </tbody>
            </table>
        )
    );
}

export default EmpTable;