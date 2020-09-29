import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const MovieCard = props => {

    // return (
    //     <div className='ui-row-five'>
    //         <div className='ui-card' key={props.movie.id}>
    //             <div className='poster'>
    //                 <img src={props.movie.poster} alt={props.movie.title} />
    //             </div>
    //             <div className='details'>
    //                 <h4>{props.movie.title}</h4>
    //                 <small>{props.movie.genre}</small>
    //                 <br/>
    //                 <small>{props.movie.year}</small>
    //                 <br/>
    //                 <small>{props.movie.rated}</small>
    //                 <br/>
    //                 <small>{props.movie.runtime}</small>
    //             </div>
    //             <br/>
    //             <div className='details-extended'>
    //                 <em>Cast: {props.movie.actors}</em>
    //                 <br/>
    //                 <br/>
    //                 <em>Director: {props.movie.director}</em>
    //                 <br/>
    //                 <br/>
    //                 <em>Plot: {props.movie.plot}</em>
    //             </div>
    //         </div>
    //     </div>
    // )
return(
    <Card>
    <Image src={props.movie.poster} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.movie.title}</Card.Header>
      <Card.Meta>
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
  </Card>
)
}
export default MovieCard;

