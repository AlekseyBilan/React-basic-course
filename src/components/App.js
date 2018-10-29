import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'

class App extends Component {
    render(){
        const {articles} = this.props;
        return (
            <div>
                <Counter/>
                <UserForm/>
                <Filters articles = {articles} />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
            </div>
        )
    }
}
export default App;
