import { useEffect } from "react";
import { useState } from "react";
import { Component } from "react";
import { Alert, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import arrayofbooks from "./fantasy.json"



const CommentArea =({filtercomment})=> {
   


    /* state = {
        exactcommnet:[]
    } */
const [exactCommnet,setExactComment] = useState(null)


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
        }
        else{
           /*  this.setState({
                exactcommnet : "there is problem with taking data"
            }) */
            setExactComment("there is problem with taking data")
        }
       }

      /*  componentDidMount = () => {
        fetching();
        console.log("componentDidMount runs corrently")} */

        useEffect(()=>{
            fetching()
            console.log("componentDidMount run corrently")
        })





        /* componentDidUpdate = (prevProps, prevState) =>{
            console.log("bironi")
            if(prevProps.filtercomment !== this.props.filtercomment){
                this.fetching();
            }

        } */

        useEffect(()=> {
            console.log("bironi")
            fetching()
        },[filtercomment])

        return(
            <>
            {exactCommnet.map(displaycomment => {return (
                <Card style={{ width: '18rem' }} className="m-0 ">
                <Card.Body>
                <Card.Title>{displaycomment.author ?(displaycomment.author) : <Skeleton height={10} ></Skeleton>}</Card.Title>
                <Card.Text>
                {displaycomment.comment || <Skeleton height={10}></Skeleton>}
                </Card.Text>
                </Card.Body>
                </Card>
                )
                })
            }
            </>
        )
}
export default CommentArea