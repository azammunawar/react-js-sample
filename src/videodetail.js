import React, {Component} from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log('this.props.selectedvideo', this.props.selectedvideo);
        var imgurl, title, description;
        if (this.props.selectedvideo) {
             imgurl = this.props.selectedvideo.snippet.thumbnails.default.url;
             description = this.props.selectedvideo.snippet.description;
             title = this.props.selectedvideo.snippet.title;

        }
        return (
            <div className="videolist">
                <div className="img"><img src={imgurl} alt=""/></div>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                </div>

            </div>

        );
    }
}
export default VideoDetail;