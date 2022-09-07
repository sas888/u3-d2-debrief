import { Component } from "react";
import arrayOfBooks from "../data/history.json"
import {Container, Row , Col} from 'react-bootstrap'

class LatestRelease extends Component{
    
    render(){
        
        return(
            <Container>
                <Row>
                    {arrayOfBooks.map((book, index) => {
                        return(
                            <img height={100} width={100} src={book.img} alt={book.title} />
                        )
                    })}
                </Row>
            </Container>
        )
    }
}


export default LatestRelease