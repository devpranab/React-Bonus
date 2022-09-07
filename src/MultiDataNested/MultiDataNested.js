import React, {useState, useEffect} from 'react';

const MultiDataNested = () => {
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState({});
    const [randomUser, setRandomUser] = useState({});

    useEffect(() => {
    //users load from api
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));

    //singleUsers load from api
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => setSingleUser(data));

    //randomUser load from api
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]));
    }, [])

    return (
        <div>
            <p>handle multiple data loading style and nested data access:</p>
            <h1>Name: {singleUser.name}</h1>
            <h1>randomUser gender: {randomUser.gender}</h1>
            <h1>randomUser email: {randomUser.email}</h1>
            {/* <h1>randomUser name: {randomUser.name?.first}</h1> */}
            <h1>randomUser name: {randomUser.name && randomUser.name.first}</h1>
            {
                users.map(user => <li>{user.name}</li>)
            }
        </div>
    );
};

export default MultiDataNested;