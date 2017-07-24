import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class Books extends Component {
    constructor(props) {
        super(props);
        console.log('proops', props);
    }

    renderList = function () {
        return this.props.books.map(book => {
            return (
                <li key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    >
                    {book.title}
                </li>
            )
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}
// function to set props to component
// anything returned from this function will end up as props on the books list 
function mapStateToProps(state) {
    return {
        books: state.books
    }
}
// function to dispatch action

function mapToDispatchProps(dispatch) {
    // whenever selectbook function is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);

}
export default connect(mapStateToProps, mapToDispatchProps)(Books);