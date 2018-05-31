import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../Components/Register'

export default (
    <Switch>
        <Route path='/' component={Register} exact />
    </Switch>
)
