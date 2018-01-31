import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {Provider} from "react-redux"

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import monthlySpendingsFormReducer from "./reducers/monthlySpendingsForm"

const rootReducer = combineReducers({
  form: formReducer.plugin({
    monthlySpendingsForm: monthlySpendingsFormReducer
  }),
})

const store = createStore(rootReducer)


ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
registerServiceWorker()
