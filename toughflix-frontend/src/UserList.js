import React from 'react';
import MovieCard from './MovieCard'

class UserList extends React.Component {

    state = {
        removeBtn: true
    }

    render() {
        return(
            <div className='ui-five-column-grid'>
            <h1 className='genre-name'>User List</h1>
                <div className='ui cards'>

                    {
                    this.props.users_list.map(movie => 
                        <MovieCard className='ui card' key={movie.id} removeBtn={this.state.removeBtn} movie={movie} handleList={this.props.removeFromList} />
                    )
                    }
                </div>
            </div>
        )
    }
}

export default UserList;
