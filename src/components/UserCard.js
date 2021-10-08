import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function UserCard(props) {
  const history = useHistory()
  return  <Card className="card">
            <Card.Body className="text-center">
              <div className="round-pic">{props.user.name[0]}</div>
                <Card.Title>{props.user.name}</Card.Title>
                <Card.Text className="name-title">@{props.user.username}</Card.Text>
                <Card.Link className="text-center" 
                           href={"http://" + props.user.website}>http://{props.user.website}
                </Card.Link><br/>
                <Button variant="primary" className="button-details" onClick={() => history.push("/users/"+props.user.id)}>MORE DETAILS</Button>
            </Card.Body>
          </Card>
}

export default UserCard