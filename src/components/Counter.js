import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }

    handleIncrement = () => {
/*        this.props.dispatch({
            type: 'INCREMENT'
        })*/ //вызов напрямую
        //this.props.dispatch(increment()); //вызов метода с передачей в него акшина из Action Creatora
        //this.props.dispatchIncrement(); //AC - Action Creators
        this.props.increment(); //es6
    }
}

function mapStateToProps(state) {
    return { counter: state.count }
}
const mapToDispatch = { increment }; //hello es6
const decorator = connect(mapStateToProps, mapToDispatch); //connect  вторым аргументом принимает функцию
export default decorator(Counter);
//Все описанное выше можно записать -
//export default connect((state) => ({counter: state.count}), {increment} (Counter);

