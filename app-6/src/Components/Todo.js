import React, {Component} from 'react'

class ToDo extends Component {
    render () {
        return <p>{this.props.task}</p> //didn't work with div tag?
    }
}

export default ToDo


