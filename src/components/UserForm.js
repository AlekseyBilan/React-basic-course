import React, {Component} from 'react';

export default class UserForm extends Component {
    state = {
        username: ''
    };

    render() {
        return (
            <div>
                User: <input type = 'text' value = {this.state.username} onChange = {this.handleChangeName}/>
            </div>
        )
    }

    handleChangeName = (ev) => {
        //some validation will be here
        this.setState({
            username: ev.target.value
        });
    }
}