import React from 'react';

class SignUp extends React.Component {

    state = {
        username: '',
        password: '',
        name: '',
        age: ''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const newUser = {
            user: {
                username: this.state.username,
                password: this.state.password,
                name: this.state.name,
                age: this.state.age
            }
        }
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
        .then(userDetails => console.log(userDetails))
        this.props.history.push('/login')
    }

    render() {
        return(
        <span className={'form-outer'}>
            <h2> Sign Up </h2>
                <form className={'signup'} onSubmit={this.handleOnSubmit}>
                <input type="text" value={this.state.username} onChange={this.handleInputChange} name='username' placeholder="Username"  />
                <input type="password" value={this.state.password} onChange={this.handleInputChange} name='password' placeholder="Password"  />
                <input type="name" value={this.state.name} onChange={this.handleInputChange} name='name' placeholder="Name" />
                <input type="age" value={this.state.age} onChange={this.handleInputChange} name='age' placeholder="Age" />
                <input id="submit" type="submit" value="Submit" />
            </form>
        </span>
        )
    }
}

export default SignUp;