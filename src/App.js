import './App.css';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './Components/MyFooter';
import SingleBook from './Components/SingleBook';
import BookList from './Components/BookList';
import { Col, Container, Row } from 'react-bootstrap';
import CommentArea from './Components/CommentArea';
import { Component, useState } from 'react';
import arrayofbooks from "./books (1)/fantasy.json"

const App =() => {


  /* state={
    books:[],
    targetbook: [],
    exactcommnet: [],
    targetevent:[],
    commentOfState:arrayofbooks[0].asin
} */
const [commentOfState,setCommentOfState]= useState(arrayofbooks[0].asin)
 
const handlestate = (commentid) => {
 /*  this.setState({
    commentOfState : commentid,
}
  ) */
  setCommentOfState(commentid)
  console.log(commentid)
 
}



  return (
    <div className="App m-0">
        <MyNav />  
        <MyFooter text="Hello"/> 
        <Container >
          <Row>
            <Col>
            <BookList  handlecomment={handlestate} ></BookList>
            </Col>
            <Col>
            <CommentArea filtercomment={commentOfState}></CommentArea>
            </Col>
          </Row>
        </Container>
        </div>
  );

}

export default App
