import {Button, Card,} from "react-bootstrap"

import { Component } from "react"


class SingleBook extends Component  {


  /* comments */

  state = {
    comments: []
  }

  FetchFunction = async () => {
    const Response = await fetch("https://striveschool-api.herokuapp.com/api/comments",{
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3N2UxNDFlYjc2ZDAwMTUxNTAxOGIiLCJpYXQiOjE2NjI2NDM0MTksImV4cCI6MTY2Mzg1MzAxOX0.fMtE0ebBsoupZB9Ngybj1-nof_E8zteogP0szzPeS5Y"
      }
    }
      );
     const data = await Response.json();
     console.log(data)
    
     this.setState({  comments: data })
     }

    
  

  componentDidMount = () => {
    this.FetchFunction();
    console.log("componentDidMount runs corrently")
  }


  render(){
    return(
      <div>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Title>Comments</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>

    )
  }
}

export default SingleBook