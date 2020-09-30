import React from 'react';
import MovieCard from './MovieCard'
import { Button } from 'semantic-ui-react'


class GenreList extends React.Component {
    render() {
        return(
            <div className='ui-five-column-grid'>
            <span><h1 className='genre-name'>Comedy</h1><Button color='youtube' className='sort' value='Alphabetically' onClick={(e) => this.props.sortMovies(e.target.value)}>Sort A-Z</Button></span>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Comedy" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} handleList={this.props.addToList}  />
                    :
                    null)
                    }
                </div>

            <h1 className='genre-name'>Action</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Action" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} handleList={this.props.addToList}  />
                    :
                    null)
                    }
                </div>

            <h1 className='genre-name'>Drama</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Drama" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} handleList={this.props.addToList}  />
                    :
                    null)
                    }
                </div>

            <h1 className='genre-name'>Horror</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Horror" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} handleList={this.props.addToList}  />
                    :
                    null)
                    }
                </div>

            <h1 className='genre-name'>Romance</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Romance" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} handleList={this.props.addToList}  />
                    :
                    null)
                    }
                </div>
            </div>
        )
    }
}

export default GenreList;