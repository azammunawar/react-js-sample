import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
    constructor(props){
        super(props);
    }
    render (){
        const videoitems = this.props.videos.map((video) => {
            return (
                <VideoListItem
                    onSelectVideo ={this.props.onSelectVideo}
                    video={video}
                    key = {video.etag}
                />
            )
        });
        return(
            <div >
                <ul>
                    {videoitems}
                </ul>
            </div>
        );
    }
}
export default VideoList;