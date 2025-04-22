import { useParams } from "react-router-dom";
import React, {useEffect} from 'react';

function Users() {
    console.log(useParams())
    const {username} = useParams()

    useEffect(() => {

    }, [])
    return (
        <h1>{username}</h1>
    )
}
export default Users;