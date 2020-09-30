import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'

const MovieCard = props => {
return(
    <Card color='black'>
    <Image src={props.movie.poster} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.movie.title}</Card.Header>
      <Card.Meta textAlign='right'>
        <span className='date'>{props.movie.year}</span>
      </Card.Meta>
      <Card.Description>
        <strong>Cast:</strong> {props.movie.actors}
        <br/>
        <strong>Director:</strong> {props.movie.director}
        <br/>
        <br/>
        {props.movie.plot}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <span>
            <strong>{props.movie.genre}</strong>
            ▪️
            <strong>{props.movie.rated}</strong>
            ▪️
            <strong>{props.movie.runtime}</strong>
        </span>
    </Card.Content>
    <Button color='youtube' onClick={() => props.addToList(props.movie)}>Add to List</Button>
  </Card>
)
}
export default MovieCard;

