import React, {Component} from 'react'
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      filterString: "",
      foods: ["enchiladas", "mac and cheese", "pizza", "ice cream"]
    }
  }

  handleChange(filter) {
    this.setState({filterString: filter})
  }

  render() {
    let filterFoods = this.state.foods
      .filter((element, index) => {
        return element.includes(this.state.filterString) //.includes
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {filterFoods}
      </div>
    )
  }
}

export default App