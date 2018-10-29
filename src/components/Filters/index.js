import React, {Component} from "react";
import PropTypes from 'prop-types'
import DateRange from './DatePicker'
import SelectFilter from './Select'
import 'react-select/dist/react-select.css'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render(){
        return(
            <div>
                <DateRange/>
                <SelectFilter articles = {this.props.articles}/>
            </div>
            )
    }
}

export default Filters