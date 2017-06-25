import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
    constructor(props){
        super(props);
        console.log(this.props.videos);
        const videoItems = props.videos.map((video) => {
            return <VideoListItem video={video} />
        });
        console.log(videoItems);
    }
    render (){
        return(
            <div >
                <ul>
                    {this.videoItems}
                </ul>
            </div>
        );
    }
}
export default VideoList;