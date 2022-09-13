import './App.css';
import MyNav from './Components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './Components/MyFooter';
import SingleBook from './Components/SingleBook';
import BookList from './Components/BookList';
import { Col, Container, Row } from 'react-bootstrap';
import CommentArea from './Components/CommentArea';
import { Component } from 'react';
import arrayofbooks from "./books (1)/fantasy.json"

class App extends Component {


  state={
    books:[],
    targetbook: [],
    exactcommnet: [],
    targetevent:[],
    commentOfState:[]
}
handlestate = commentid => {
  this.setState({
    commentOfState : commentid,
}
  )
  console.log(commentid)
 
}
render(){
  return (
    <div className="App m-0">
        <MyNav/>  
        <MyFooter text="Hello"/> 
        <Container >
          <Row>
            <Col>
            <BookList  handlecomment={this.handlestate} ></BookList>
            </Col>
            <Col>
            <CommentArea filtercomment={this.state.commentOfState}></CommentArea>
            </Col>
          </Row>
        </Container>
        </div>
  );

}

 
}

export default App;
