import { useEffect, useState } from 'react';
import {Navbar} from 'react-bootstrap'
import CardList from './CardList'

function ListPage() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const json = await response.json();
                setUsers(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <Navbar bg="light" expand="lg"/>
            <CardList users={users}/>
        </div>
    )
}

export default ListPage