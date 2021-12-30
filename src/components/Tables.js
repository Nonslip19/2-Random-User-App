import React from 'react';
import { Table } from 'react-bootstrap';
import UserTable from './UserTable';


const Tables = ({addUser}) => {
    console.log(addUser);
    return (
        <div>
        {
            addUser.length > 0  ? ( <Table striped bordered hover className='table'>
            <thead>
                <tr>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                </tr>
            </thead>
            <UserTable addUser = {addUser} />
        </Table>) : null
        } 
            
        </div>
    );
};

export default Tables;
