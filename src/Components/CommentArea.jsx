import { useEffect } from "react";
import { useState } from "react";
import { Alert, Card,Button, Container, Row, Col,Form, InputGroup } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import arrayofbooks from "./fantasy.json"



const CommentArea =({filtercomment})=> {
   
    /* state = {
        exactcommnet:[]
    } */
const [exactCommnet,setExactComment] = useState([{
    author:"nazami",
    comment: "this is a good book"
}])


 const  fetching = async() =>{
        const Response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+filtercomment,{
          method: "GET",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3N2UxNDFlYjc2ZDAwMTUxNTAxOGIiLCJpYXQiOjE2NjI2NDM0MTksImV4cCI6MTY2Mzg1MzAxOX0.fMtE0ebBsoupZB9Ngybj1-nof_E8zteogP0szzPeS5Y"
        }
      }
        );
        if(Response.ok){
            const data = await Response.json();
           /*  this.setState({
                exactcommnet: data
               }) */
               setExactComment(data)
               console.log(data)
        }
        else{
           /*  this.setState({
                exactcommnet : "there is problem with taking data"
            }) */
            setExactComment("there is problem with taking data")
            console.log("to check not working")
        }
       }

      /*  componentDidMount = () => {
        fetching();
        console.log("componentDidMount runs corrently")} */

        useEffect(() => {
           fetching()
        },[])





        /* componentDidUpdate = (prevProps, prevState) =>{
            console.log("bironi")
            if(prevProps.filtercomment !== this.props.filtercomment){
                this.fetching();
            }

        } */

        useEffect(()=> (
               ()=>{fetching()}
        ),[filtercomment])

        return(
            <div className=" justify-content-between m-5" style={{position:"sticky", top:0}}>
               
    <Form>
      <Row className="align-items-center">
        <Col className="my-1">
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Email
          </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
        </Col>
        <Col className="my-1">
          <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
            Comment
          </Form.Label>
          <InputGroup>
            <Form.Control
              id="inlineFormInputGroupUsername"
              placeholder="Comment"
            />
          </InputGroup>
        </Col> 
      </Row>
      <Button type="submit">Add comment</Button>
    </Form>
    <div className="d-inline-flex flex-wrap m-5"> 
        {exactCommnet.map(displaycomment => {return (
                    <Card border="primary" bg="success" style={{ width: '18rem' }} className="m-0 ">
                    <Card.Body>
                    <Card.Title>{displaycomment.author ?(displaycomment.author) : <Skeleton height={10} ></Skeleton>}</Card.Title>
                    <Card.Text>
                    {displaycomment.comment || <Skeleton height={10}></Skeleton>}
                    </Card.Text>
                    </Card.Body>
                    <Container>
                        <Row>
                            <Col>
                            <Button variant="danger">Delete</Button>
                            </Col>
                            <Col>
                            <Button variant="info">Edit</Button>
                            </Col>
                        </Row>
                    </Container>
                    </Card>
                    )
                    }
                )
            } 
             </div>
             </div>
        )
}
export default CommentArea