import React, {Component} from 'react'

export default class ArticleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    render(){
        const {article} = this.props;
        return(
            <div>
                <h3>{article.title}</h3>
                {this.getHtml()}
                <button onClick={this.toggleOpen}>
                    {(this.state.isOpen)? 'Close article' : 'Open article'}
                </button>
            </div>
            )
    }

    getHtml(){
        const {article} = this.props;
        if(this.state.isOpen){
            return <div>{article.text}</div>
        }else{
            return null;
        }
    }

    toggleOpen(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
