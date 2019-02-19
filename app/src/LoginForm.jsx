import React, {Fragment} from 'react';

export default class LoginForm extends React.Component {

    render() {
        return(
            <form method="get" action="http://google.com">
                <span>Login:</span>
                <input/>
                <span>Password</span>
                <input type="password"/>

                <button type="submit">GO</button>
            </form>

        );
    }

}

