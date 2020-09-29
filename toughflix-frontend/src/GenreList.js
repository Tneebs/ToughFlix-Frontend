import React from 'react';
import MovieCard from './MovieCard'


class GenreList extends React.Component {
    render() {
        return(
            <div className='ui-five-column-grid'>
            <h1 className='genre-name'>Comedy</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Comedy" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} addToList={this.props.addToList} removeFromList={this.props.removeFromList} />
                    :
                    null)
                    }
                </div>

                <h1 className='genre-name'>Action</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Action" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} addToList={this.props.addToList} removeFromList={this.props.removeFromList} />
                    :
                    null)
                    }
                </div>

                <h1 className='genre-name'>Drama</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Drama" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} addToList={this.props.addToList} removeFromList={this.props.removeFromList} />
                    :
                    null)
                    }
                </div>

                <h1 className='genre-name'>Horror</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Horror" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} addToList={this.props.addToList} removeFromList={this.props.removeFromList} />
                    :
                    null)
                    }
                </div>

                <h1 className='genre-name'>Romance</h1>
                <div className='ui cards'>
                    {
                    this.props.movies.map(movie => movie.genre === "Romance" ?
                        <MovieCard className='ui card' key={movie.id} movie={movie} addToList={this.props.addToList} removeFromList={this.props.removeFromList} />
                    :
                    null)
                    }
                </div>

            </div>
        )
    }
}

export default GenreList;