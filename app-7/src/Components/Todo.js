import React, {Component} from 'react'

class Todo extends Component {
    render () {
        return <p>{this.props.task}</p> //didn't work with div tag?
    }
}

export default Todo


