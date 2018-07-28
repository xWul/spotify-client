/* LIBS */ 
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Loader from './components/Loader'


export const App = Loadable({
    loader:()=>import('./screens/App'),
    loading: Loader
})


const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  )
}

export default Routes