import React from 'react';
import GenreList from './GenreList'
import UserList from './UserList'

class MainPage extends React.Component {

    state = {
        movies: [],
        allMovies: [],
        users_list: [],
        users: [],
        sort: ''
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

    sortMovies = (e) => {
        let sortedMovies = []
        let newSort = ""
        if (e === "Alphabetically" && this.state.movies !== undefined){
          sortedMovies = this.state.movies.sort((a, b) => a.title.localeCompare(b.title))
          newSort = "Alphabetically"
          this.setState({
            ...this.state,
            movies: sortedMovies,
            sort: newSort
          })
        }
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
        console.log(this.state.movies)
        return (
            <div className='MainPage'>
                <UserList users_list={this.state.users_list} removeFromList={this.removeFromList} />
                <GenreList sort={this.state.sort} sortMovies={this.sortMovies} movies={this.state.movies} addToList={this.addToList} />
            </div>
        )
    }
}

export default MainPage;