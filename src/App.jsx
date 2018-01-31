import React, {Component} from 'react'
import Finance from 'financejs'
// import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'

import {Row, Col} from './grid'

const finance = new Finance()

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
      <Row>
        <Col>
          <label>Wage 1:</label>
          <input type="text" />
          <label>Wage 2:</label>
          <input type="text" />
          <input type="text" onChange={this.handleChange}/>
          <p>{this.state.amortisation}</p>
        </Col>
      </Row>
        <div></div>
     </div> )
  }
}

export default App
