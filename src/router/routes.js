import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../Components/Register'
import Favorites from '../Components/Favorites';
import Results from '../Components/Results';

export default (
    <Switch>
        <Route path='/' component={Register} exact />
        <Route path='/favorites' component={Favorites}/>
        <Route path='/results' component={Results}/>
    </Switch>
)
