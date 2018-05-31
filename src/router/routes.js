import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../Components/Register'
import Favorites from '../Components/Favorites';
import Results from '../Components/Results';
import PartTwo from '../Components/PartTwo'
import Pokemon from '../Components/Pokemon';

export default (
    <Switch>
        <Route path='/' component={Register} exact />
        <Route path='/favorites' component={Favorites}/>
        <Route path='/results' component={Results}/>
        <Route path='/partTwo' component={PartTwo}/>
        <Route path='/pokemon/:id' component={Pokemon}/>
    </Switch>
)
