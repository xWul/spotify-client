/* LIBS */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
/* COMPONENTES */
import Loader from './components/Loader'

const App = Loadable({
  loader: () => import('./screens/App'),
  loading: Loader
})

const Artist = Loadable({
  loader: () => import('./screens/Artist'),
  loading: Loader
})

const Album = Loadable({
  loader: () => import('./screens/Album'),
  loading: Loader
})

const Track = Loadable({
  loader: () => import('./screens/Track'),
  loading: Loader
})

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/artist/:query' component={Artist} />
        <Route exact path='/album/:query' component={Album} />
        <Route exact path='/track/:query' component={Track} />
      </div>
    </Router>
  )
}

export default Routes