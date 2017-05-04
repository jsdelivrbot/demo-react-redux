import React from 'react';


const VideoListItem = ({video,onVideoSelect}) => {
// this line is same as define video parameter...
  //const video = props.video
  const imgURL = video.snippet.thumbnails.default.url;
  const videoURL = "https://www.youtube.com/watch?v=" + video.id.videoId;
  return (
     <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video_list media">
          <div className="media-left">
            <a href={videoURL}>
              <img className="media-object" src={imgURL} />
            </a>
          </div>
          <div className="media-body">
            <div className="media-heading">
                {video.snippet.title}
            </div>
          </div>
        </div>
     </li>
  );

};

export default VideoListItem;
