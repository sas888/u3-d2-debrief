import {Button, Card,} from "react-bootstrap"

import { Component } from "react"
import Skeleton from "react-loading-skeleton"

const SingleBook = ({bk}) =>  {


  /* comments */

  
    return(
      <Card style={{ width: '12rem' }}>
        {bk?.img ? (
        <Card.Img variant="top" src={bk.img}  />
        ) :(
          <span style={{ lineHeight: 0 }}>
              <Skeleton height={800} />
            </span>
        ) }
      <Card.Body>
        <Card.Title style={{fontSize:12}}>{bk.title || <Skeleton height={20} /> }</Card.Title>
        <Card.Text style={{fontSize:10}}>{bk.price || <Skeleton count={5}></Skeleton>}
        </Card.Text>
        </Card.Body>
       </Card>
    )
  }


export default SingleBook