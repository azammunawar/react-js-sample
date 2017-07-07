import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props){
        super(props);

    }
    render (){
        const imgurl = this.props.video.snippet.thumbnails.default.url;
        const description = this.props.video.snippet.description;
        const title = this.props.video.snippet.title;
        return(
             <li className="videolist">
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