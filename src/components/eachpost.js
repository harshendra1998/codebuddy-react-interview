import React from 'react'
import { Card } from 'react-bootstrap'

export default function Eachpost({id, firstName, lastName, writeup, image, avatar}) {
  return (
    <div className='col-xs-12 col-sm-6 col-md-4'><Card className='m-2'>
      <Card.Img variant='top' src={image} />
<Card.Body >
        <Card.Title>{writeup}</Card.Title>
        <Card.Text><img style={{height:20, width:20}} src={avatar}></img>{firstName} {lastName}</Card.Text>
        <Card.Text>id: {id}</Card.Text>
    </Card.Body>
    </Card>
    </div>
  )
}
