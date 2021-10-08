import UserCard from "./UserCard"
import React from 'react'
import { Container } from "react-bootstrap"

function CardList(props) {
    console.log(props)
    return( 
    <Container>
        {
            props.users.map(user => 
                <UserCard user={user} key={user.id}/>   
            )
        }   
    </Container>
    )
}


export default CardList