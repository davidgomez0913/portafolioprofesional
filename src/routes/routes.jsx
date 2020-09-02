import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Homepage from '../components/Homepage/homepage'

const Routes=()=> {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />    
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes
