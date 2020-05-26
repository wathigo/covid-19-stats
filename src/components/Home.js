import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';


class BookList extends React.Component {
    handleLoading(e) {
        e.preventDefault();
        console.log(this.props)
        this.props.fetchData();
    }
    render() {
        return (
            <div onClick={this.handleLoading.bind(this)}>Click me</div>
        )
    }
}

const mapStateToProps = (state => {
    return state;
});

export default connect(mapStateToProps, ActionCreators)(BookList);