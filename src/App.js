import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './searchbar';
import VideoList from './videolist';
import VideoDetail from './videodetail';
import YTSearch from 'youtube-api-search';
import Books from './containers/books_list';
import './App.css';


const api_key = 'AIzaSyBxVF7VJvvLJc1mwJbJ8njfMweESosawOc';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.state = {
            videos: [],
            selectedvideo: null
        };

        this.videosearch('eminem');
    }

    videosearch(term) {
        YTSearch({key: api_key, term: term}, (data) => {
            this.setState({
                videos: data,
                selectedvideo: data[0]
            });

        });
    }

    render() {
        return (
            <div className="container">

                <SearchBar onSearchTermChange={term => this.videosearch(term)}/>
                <div className="row clearfix">
                    <div className="col-sm-8">
                        <VideoDetail selectedvideo={this.state.selectedvideo}/>
                        <Books/>
                    </div>
                    <div className="col-sm-4">
                        <VideoList
                            onSelectVideo={selectedvideo => this.setState({selectedvideo})}
                            videos={this.state.videos}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
