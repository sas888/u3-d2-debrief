import {Component} from "react";
import { Navbar, Container,Nav, Form,Button } from "react-bootstrap";

class MyNav extends Component{
  state={
    searchvalue: []
    
  }
  updating = (value)=>{
    this.setState({
      searchvalue: value
    })
  }


render(){
  {console.log(this.state.searchvalue)}
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Book Shop</Navbar.Brand>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={this.state.searchvalue}
                    onChange={(e)=> this.updating(e.target.value)}
                  />
                  
                  <Button variant="outline-success">Search</Button>
                </Form>
        </Container>
      </Navbar>
     
      </>
    )
}
}

export default MyNav