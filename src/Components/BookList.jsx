import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";


class BookList extends Component{

    state = {
        query: "a"
    }
   
    // filterBooks = () => {
        
    //  filteredArray = this.props.books.filter(book => { return book.title.toLowerCase().includes(this.state.query.toLowerCase()) })
    //   console.log(filteredArray)
    // }
    render(){


        return(
            <Container>
                {/* <Button onClick={() => filterBooks()} > something</Button> */}
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