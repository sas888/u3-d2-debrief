import {Button, Card,} from "react-bootstrap"


import Skeleton from "react-loading-skeleton"

const SingleBook = ({bk}) =>  {


  /* comments */

  
    return(
      <Card style={{ width: '12rem', margin:0, padding:0}}>
         {bk?.img ? (
        <Card.Img variant="top" src={bk.img}  />
        ) :(
          <span style={{ lineHeight: 0 }}>
              <Skeleton height={800} />
            </span>
        ) }
      <Card.Body>
        <Card.Title style={{fontSize:12, margin:0}}>{bk.title || <Skeleton height={20} /> }</Card.Title>
        <Card.Text style={{fontSize:10, margin:0}}>PRICE : {bk.price || <Skeleton count={5}></Skeleton>} dollar
        </Card.Text>
        </Card.Body>
       </Card>
    )
  }


export default SingleBook