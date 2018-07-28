import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import globalStyle from './theme/globalStyle'
import 'reset-css'

import Routes from './Routes'

globalStyle()

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
