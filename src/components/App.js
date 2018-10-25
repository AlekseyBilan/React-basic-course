import React, {Component} from 'react'
import ArticleList from './ArticleList'

class App extends Component {
    render(){
        return (<ArticleList articles = {this.props.articles} />)
    }
}
export default App;
