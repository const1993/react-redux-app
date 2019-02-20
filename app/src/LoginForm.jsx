import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {login, logout} from './redux/reducer'

class LoginForm extends React.Component {
    state = {
    };

    constructor(props) {
        super(props);
        this.state = {
            login: props.login,
            password: props.password
        }
    }

    loginChange = (e) => {
        const login = e.target.value;
        this.setState({login})
    };

    passwordChange = (e) => {
        const password = e.target.value;
        this.setState({password})
    };

    handleLogin = () => {
        this.props.login(this.state)
    };

    render() {
        return(
            <form>
                <span>Login:</span>
                <input onChange={this.loginChange}/>
                <span>Password</span>
                <input onChange={this.passwordChange} type="password"/>

                <button onClick={this.handleLogin}>GO</button>

                <span>{this.state.login}</span>
                <span>{this.state.password}</span>
            </form>
        );
    }
}
const mapToProps = (store) => ({
    login: store.name,
    password: store.password,
});

const dispatchToProps = {login, logout};

export default connect(mapToProps, dispatchToProps)(LoginForm)