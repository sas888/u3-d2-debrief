import {Button, Card,} from "react-bootstrap"
const SingleBook = (props) =>{
    return(
        <div>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
        </div>

    )
}
export default SingleBook
