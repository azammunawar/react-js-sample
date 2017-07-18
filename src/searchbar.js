import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

    }

    render() {
        return (
            <div className="searchbar">
                <form action="">
                    <div className="form-group col-sm-10">
                        <input type="text"
                               className="form-control"
                               value={this.state.input}
                               onChange={event => this.setState({input: event.target.value})}
                        />
                    </div>
                    <div className="col-sm-2">
                        <input type="button"
                               className="btn btn-default"
                               onClick={() => this.props.onSearchTermChange(this.state.input)}
                               value="Search"/>
                    </div>


                </form>

            </div>
        );
    }
}
export default SearchBar;