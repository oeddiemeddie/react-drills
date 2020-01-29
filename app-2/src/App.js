import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hallucinations: ["pink elephant", "top hat man in the back seat", "bees in your eyes", "water", "tree man"]
    }
  }

  render() {
    let hallucinations = this.state.hallucinations.map((element, index) => {
      return <h1 key={index}>{element}</h1>
    })
    return <div className="App">{hallucinations}</div>
  }

}

export default App