import React, {Component} from 'react'
import Finance from 'financejs'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import compose from "recompose"

import logo from './logo.svg'
import './App.css'
import {Row, Col} from './grid'

const finance = new Finance()


const Input = styled.input`

`

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      amortisation: ''
    }
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      amortisation: finance.AM(e.target.value, 7.5, 5, 0)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
    <form>
      <Row>
        <Col>
          <label>Wage 1:</label>
            <Field></Field>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>Wage 2:</label>
          <input type="text" />
        </Col>
      </Row>
      <Row>
        <Col>
          <label>Amortisation:</label>
          <input type="text" onChange={this.handleChange}/>
          <p>{this.state.amortisation}</p>
        </Col>
      </Row>
    </form>
     </div> )
  }
}

export default compose(App)(
  reduxForm({ form: "monthlySpendingsForm" })
)
