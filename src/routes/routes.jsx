import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Homepage from '../components/Homepage/homepage'
import Peliculasazul from '../components/PeliculasAzul/peliculasAzul'
const Routes=()=> {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />    
            <Route exact path="/proyectos/peliculasazul" component={Peliculasazul}/>
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes
