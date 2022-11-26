import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greet;
    if(familiar){
        greet = <p>Good morning!</p>
    }else{
        greet = <p>Good night!</p>
    }
    return (
        <div>
            <h2>greeting</h2>
            <p>{greet}</p>
        </div>
    );
};

export default User;

//short in one line (ternery operator)
//const greet = familiar ? <p>Good morning!</p> : <p>Good night!</p>;