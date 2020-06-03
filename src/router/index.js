import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ROOT, MAIN, TAB, WARPER, LOGIN } from '../route';
import Login from '../login';
import Main from '../main';
import Warper from '../warper';
import Tab from '../tab';

class Routers extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={TAB} component={Tab} />
                    <Route path={WARPER} component={Warper} />
                    <Route path={MAIN} component={Main} />
                    <Route path={LOGIN} component={Login} />
                    <Redirect from={ROOT} to={LOGIN} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routers;