import React from 'react';
import MovieCard from './MovieCard'

class UserList extends React.Component {
    render() {
        return(
            <div className='ui-five-column-grid'>
            <h1 className='genre-name'>User List</h1>
                <div className='ui cards'>

                    {
                    this.props.users_list.map(movie => 
                        <MovieCard className='ui card' key={movie.id} movie={movie} addToList={this.props.removeFromList} />
                    )
                    }
                </div>
            </div>
        )
    }
}

export default UserList;