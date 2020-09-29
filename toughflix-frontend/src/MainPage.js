import React from 'react';
import GenreList from './GenreList'

class MainPage extends React.Component {

    state = {
        movies: [],
        allMovies: [],
        users_list: [],
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/movies', {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Auth-Key': localStorage.getItem('auth_key')
            }
        })
        .then(resp => resp.json())
        .then(movies => this.setState({
            movies: movies,
            allMovies: movies
        }))
    }

    addToList = (addedMovie) => {
        this.setState({
            users_list: [...this.state.users_list, addedMovie]
        })
    }

    removeFromList = (selectedMovie) => {
        this.setState({
            users_list: this.state.users_list.filter(movie => movie !== selectedMovie)
        })
    }



    render() {
        return (
            <div className='MainPage'>
                <GenreList users_list={this.state.users_list} movies={this.state.movies} addToList={this.addToList} removeFromList={this.removeFromList} />
            </div>
        )
    }
}

export default MainPage;