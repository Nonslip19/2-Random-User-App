import React from 'react'

const UserTable = ({addUser}) => {
    console.log(addUser);
    return (
        <tbody>
        {addUser.map((user)=>(
            <tr key={user.email}>
            <td>{user.first +" "+ user.last}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.age}</td>
            </tr>
            ))}
        </tbody>
    )
}

export default UserTable;
