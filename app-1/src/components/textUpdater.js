import React, {Component} from 'react'

class TextContainer extends Component {
    constructor(){
        super()

        this.state = {
            text: ''
        }

    }

    textUpdater = (val) => {
        this.setState({ text: val })
    }

    render () {
        return (
            <div>
                <input className="textUpdater" onChange={(e) => this.textUpdater(e.target.value)} type="text" />
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default TextContainer