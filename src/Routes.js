/* LIBS */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
/* COMPONENTES */
import Loader from './components/Loader'
export const App = Loadable({
  loader: () => import('./screens/App'),
  loading: Loader
})

export const Artist = Loadable({
  loader: () => import('./screens/Artist'),
  loading: Loader
})


const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/artist/:query' component={Artist} />
      </div>
    </Router>
  )
}

export default Routes