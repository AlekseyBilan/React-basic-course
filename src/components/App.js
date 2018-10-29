import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import DateRange from './DatePicker'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {
    state = {
        selection: null
    };
    render(){
        const {articles} = this.props;
        const options = articles.map( article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <UserForm/>
                <DateRange/>
                <Select className = 'myClass' options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi = {true}/>
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
            </div>
        )
    }

    changeSelection = selection => this.setState({selection});
}

export default App;
