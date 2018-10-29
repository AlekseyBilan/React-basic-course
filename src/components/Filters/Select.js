import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select'

export default class SelectFilter extends Component {
    state = {
        selection: []
    };

    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const {articles} = this.props;
        const options = articles.map( article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <Select className = 'myClass' options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi = {true} />
        )
    }

    changeSelection = selection => this.setState({selection});
}