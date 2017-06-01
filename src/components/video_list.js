import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {  
  const videoItems = props.videos.map( (video) => {
    return (
      //video.etag co etag lay tu response cua youtube, unique voi tung video
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )

  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
