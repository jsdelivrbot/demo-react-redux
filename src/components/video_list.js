import React from 'react' ;
import VidelListItem  from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VidelListItem
      key={video.etag}
      video={video}
      onVideoSelect ={ props.onVideoSelect}
    />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
