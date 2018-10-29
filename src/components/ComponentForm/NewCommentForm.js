import React, {Component} from 'react';
import './validate.css'

export default class NewCommentForm extends Component {
    state = {
        userName: '',
        commentText: ''
    };
    render() {
        return (
            <div>
                User: <input className={this.validateName(this.state.userName)?'valid':'invalid'} type = 'text' value = {this.state.userName} onChange = {this.handleChangeName}/><br/>
                Text: <textarea className={this.validateText(this.state.commentText)?'valid':'invalid'} value = {this.state.commentText} onChange = {this.handleChangeText}/>
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

    validateName = name =>{
            return (name.length >= 5 && name.length <= 15)
    };

    validateText= text =>{
        return (text.length >= 20 && text.length <= 50)
    };
}