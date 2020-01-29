import React, {Component} from 'react'
import "./App.css"
import TextUpdater from './components/textUpdater'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textUpdater: ''
    }
  }

  handleChange = (val) => {
    this.setState({ textUpdater: val })
  }

  render() {
    return (
      <div className="textArea">
        {}
        <TextUpdater  />
        
      </div>
    )
  }
}

export default App