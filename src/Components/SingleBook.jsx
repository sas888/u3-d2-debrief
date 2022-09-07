import {Button, Card,} from "react-bootstrap"
const SingleBook = (props) =>{
    return(
        <div>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
        </div>

    )
}
export default SingleBook
