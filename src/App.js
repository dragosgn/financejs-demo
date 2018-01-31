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
     <form onSubmit={handleSubmit(onSubmit)}>
       <Row>
         <Col>
           <label>Wage 1:</label>
           <Field component="input" name="wage.1" type="text"></Field>
         </Col>
       </Row>
       <Row>
         <Col>
           <label>Wage 2:</label>
           <Field component="input" name="wage.2"  type="text"></Field>
         </Col>
       </Row>
       <Row>
         <Col>
           <label>Amortisation:</label>
           <input component="input" name="amortisation" onChange={handleChange}  type="text"/>
           <p>{this.state.amortisation}</p>
         </Col>
       </Row>
     </form>
   </div>)

export default compose(
  reduxForm({form: "monthlySpendingsForm"}),
  withHandlers({
    onSubmit: () => (values) => {
      console.log(values)
    },
    handleChange: () => (values) => {
      console.log("standard deviation", standardDeviation(values))
    }
  })
)(App)
