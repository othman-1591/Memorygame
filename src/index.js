import React, {Suspense} from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Suspense fallback={null}>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)

serviceWorker.unregister()
