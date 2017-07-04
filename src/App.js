import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import SearchBar from './searchbar';
import VideoList from './videolist';
import YTSearch from 'youtube-api-search';
import './App.css';



const api_key = 'AIzaSyBxVF7VJvvLJc1mwJbJ8njfMweESosawOc';



class App extends Component {
    constructor(props){
        super(props);
        this.state= {input:''};
        this.state = {videos:[2,3]};
        const video = 12;
        YTSearch({key:api_key, term: 'surfboards'}, (data) => {
            console.log('data', data);
           this.setState({videos: data});
            console.log('videos search', this.state.videos);
            //const video = <VideoList videos={this.state.videos} />
        });
        
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {this.state.input}
           length: {this.state.videos.length}
          <h2>Welcome to React</h2>
            <input type="text" onChange={event => this.setState({input: event.target.value})}/>
        </div>
        <p className="App-intro">
            <Link to="/about" >About</Link>
          To get started, edit <code >src/App.js</code> and save to reload.
        </p>
          <SearchBar/>
          <VideoList videos={this.state.videos} />
          {this.video}

      </div>
    );
  }
}

export default App;
