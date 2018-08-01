import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import globalStyle from './theme/globalStyle'
import 'core-js'
import 'reset-css'

import Routes from './Routes'

globalStyle()

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
