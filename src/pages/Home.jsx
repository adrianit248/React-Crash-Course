import React, {useEffect, useState} from 'react'
import axios from 'axios'
import User from "../components/User.jsx"
import {Link} from "react-router-dom"
import { render } from '@testing-library/react'

function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchUsers();         
        }, 2000);
    }, [])

    function renderUsers() {
        return users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
            <User id={user.id} name={user.name} email={user.email} username={user.username} />
            </Link>
        ))
    }

    function skeletonLoading() {
        return <h1>Loading...</h1>
    }

    const pixels = "2px"

    return (
        <div>
            {users.length ? renderUsers() : skeletonLoading()}
        </div>
    );
}

export default Home