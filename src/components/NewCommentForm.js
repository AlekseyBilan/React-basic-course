import React, {Component} from 'react';
import './validate.css'

export default class NewCommentForm extends Component {
    state = {
        userName: '',
        commentText: '',
        isValidName: true,
        isValidText: true,
    };
    render() {
        console.log('Render start');
        return (
            <div>
                User: <input className={this.state.isValidName?'valid':'invalid'} type = 'text' value = {this.state.userName} onChange = {this.handleChangeName} onBlur = {this.validateName}/><br/>
                Text: <textarea className={this.state.isValidText?'valid':'invalid'} value = {this.state.commentText} onChange = {this.handleChangeText} onBlur = {this.validateText} >some text</textarea>
            </div>
        )
    }
    handleChangeName = (ev) => {
        this.setState({
            userName: ev.target.value
        });
    };
    handleChangeText = (ev) => {
        this.setState({
            commentText: ev.target.value
        });
    };

    validateName = (ev) => {
        this.setState({
            isValidName: (ev.target.value.length <= 5 && ev.target.value.length >= 15)
        });
    };

    validateText = (ev) => {
        this.setState({
            isValidText: (ev.target.value.length >= 20 && ev.target.value.length <= 50)
        });
    }
}