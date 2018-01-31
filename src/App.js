import React from 'react'
// import Finance from 'financejs'
// import styled from 'styled-components'
import {Field, reduxForm} from 'redux-form'
import {compose, withHandlers} from "recompose"

import logo from './logo.svg'
import './App.css'
import {Row, Col} from './grid'
import {standardDeviation} from 'simple-statistics'



// const finance = new Finance()

const App = ({handleSubmit, onSubmit, handleChange}) => (<div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo"/>
       <h1 className="App-title">Welcome to React</h1>
     </header>
     <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
       <Row>
         <Col>
           <label>Wage 1:</label>
           <Field component="input" name="wage.0" type="text"></Field>
         </Col>
       </Row>
       <Row>
         <Col>
           <label>Wage 2:</label>
           <Field component="input" name="wage.1"  type="text"></Field>
         </Col>
       </Row>
       <Row>
         <Col>
           <label>Wage.3:</label>
           <Field component="input" name="wage.2" type="text"/>
         </Col>
       </Row>
       <button type="submit">Submit</button>
     </form>
   </div>)

export default compose(
  reduxForm({form: "monthlySpendingsForm"}),
  withHandlers({
    onSubmit: () => (values) => {
      let newValues = Object.keys(values).map((key) => values[key] )
      let sDev = standardDeviation(newValues)
      console.log(sDev)
    },
    handleChange: () => () => {
    }
  })
)(App)
