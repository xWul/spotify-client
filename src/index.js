import React from 'react'
import ReactDOM from 'react-dom'
import App from './screens/App'
import registerServiceWorker from './registerServiceWorker'
import globalStyle from './theme/globalStyle'
import 'reset-css'

globalStyle()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
