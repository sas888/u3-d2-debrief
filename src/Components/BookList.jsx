import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component{
    render(){
        return(
            <Container>
                <Row>
                {this.props.books.map((book)=>{
                        return(
                    <Col key={book.asin}>
                  
                            <SingleBook book={book}></SingleBook>
                        
                    </Col>
                        )
                }
                )
            }
            
            </Row>
            </Container>
        )
    }
}
export default BookList