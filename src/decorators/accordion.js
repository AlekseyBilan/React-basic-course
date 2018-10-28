import React, {Component} from 'react';

export default OriginalComponent => class accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openItemId: null
        }
    }

    render() {
        return <OriginalComponent {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = { this.state.openItemId }/>
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        });
    }
}