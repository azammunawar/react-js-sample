import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props){
        super(props);
    }
    render (){
        const video = this.props.video;
        const imgurl = video.snippet.thumbnails.default.url;
        const description = video.snippet.description;
        const title = video.snippet.title;
        return(
             <li className="videolist" onClick={() => this.props.onSelectVideo(video)}>
                 <div className="img"><img src={imgurl} alt=""/></div>
                 <div className="content">
                     <div className="title">{title}</div>
                     <div className="description">{description}</div>
                 </div>

             </li>

        );
    }
}
export default VideoListItem;