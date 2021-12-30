import React from 'react';
import { Table } from 'react-bootstrap';
import UserTable from './UserTable';


const Tables = ({addUser}) => {
    return (
        <div>
            <Table striped bordered hover className='table'>
            <thead>
                <tr>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                </tr>
            </thead>
            <UserTable addUser = {addUser} />
        </Table>
        </div>
    );
};

export default Tables;
