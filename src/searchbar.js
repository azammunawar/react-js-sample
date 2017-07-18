import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

    }

    render (){
        return(
            <div className="searchbar">
               
                <input type="text"
                       value={this.state.input}
                       onChange={event => this.setState({input: event.target.value})}
                />
                <input type="button" onClick={() => this.props.onSearchTermChange(this.state.input)} value="Search"/>
            </div>
        );
    }
}
export default SearchBar;