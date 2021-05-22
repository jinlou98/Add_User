import React from 'react';

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return(    
        // the function to call when the form is submitted 
        // no parenthesis!!! we just want to pass a pointer
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
    )

};


export default AddUser;