import React, {Component} from 'react';
import {connect} from 'react-redux';

class ActiveBook extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        var activebook;
        if (this.props.activebook)
            activebook = this.props.activebook.title;



        return (
            <div>{activebook}</div>
        )

    }
}
function mapStateToProps(state) {
    return {
        activebook: state.activebook
    }
}
export default connect(mapStateToProps)(ActiveBook);