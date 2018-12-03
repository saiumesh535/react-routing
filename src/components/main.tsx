import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Profile from './mainroutes/profile';
import Settings from './mainroutes/settings';


class Main extends Component {
    render() {
        return (
            <div>
                <p>Hello I'm Main</p>
                <button >
                    <Link to={`/profile`}>Profile</Link>
                </button>
                <Switch>
                    <Route path='/profile' component={Profile} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </div>
        )
    }
};

export default Main;