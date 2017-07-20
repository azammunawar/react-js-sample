import React, {Component} from 'react';
import {connect} from 'react-redux';

class Books extends Component {
    constructor(props) {
        super(props);
    }

    renderList = function () {
        return this.props.books.map(function (book) {
            return(
                <li key={book.title}>{book.title}</li>
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

function  mapStateToProps(state) {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(Books);