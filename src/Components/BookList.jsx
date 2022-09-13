import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import arrayofbooks from '../data/fantasy.json'

 const BookList = (props)=> {
    // filterBooks = () => {
        
    //  filteredArray = this.props.books.filter(book => { return book.title.toLowerCase().includes(this.state.query.toLowerCase()) })
    //   console.log(filteredArray)
    // }        
        return(
            <Container > 
                <Row>
                  <>{arrayofbooks.map((book)=> {
                    return( <div onClick={(event)=>{
                       console.log(event.target.src)
                       arrayofbooks.filter(book => {book.img.includes(event.target.src) ?
                       props.handlecomment(book.asin) : console.log("not happened")}
                        )
                      } }>
                      <Col>
                      <SingleBook  bk={book}></SingleBook>
                      </Col>
                      </div>
                    )
                  }
                  )
                }  
             </>
            </Row>
            </Container>
        )
    }
export default BookList