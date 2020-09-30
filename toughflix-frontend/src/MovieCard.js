import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'

class MovieCard extends React.Component {

  state = {
    isActive: false
  }

  toggleDetails = () => {
    this.setState(previousState => {
      return {
        isActive: !previousState.isActive}
      })
    
  }

  render(){

    let card1 = (
      <Card color='black' onClick={() => this.toggleDetails()}>
    <Image src={this.props.movie.poster} wrapped ui={false}/>
    </Card>
    )

    let card2 = (
      <Card color='black' onClick={() => this.toggleDetails()}>
      <Card.Content>
      <Card.Meta textAlign='right'>
        <span className='date'>{this.props.movie.year}</span>
      </Card.Meta>
      <Card.Description>
        <strong>Cast:</strong> {this.props.movie.actors}
        <br/>
        <strong>Director:</strong> {this.props.movie.director}
        <br/>
        <br/>
        {this.props.movie.plot}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <span>
            <strong>{this.props.movie.genre}</strong>
            ▪️
            <strong>{this.props.movie.rated}</strong>
            ▪️
            <strong>{this.props.movie.runtime}</strong>
        </span>
    </Card.Content>
    {this.props.removeBtn 
    ? 
    <Button color='youtube' onClick={() => this.props.handleList(this.props.movie)}>Remove from List</Button> 
    : 
    <Button color='youtube' onClick={() => this.props.handleList(this.props.movie)}>Add to List</Button>}
    </Card>
    )

return(
  !this.state.isActive ? card1 : card2
)
}
}
export default MovieCard;

