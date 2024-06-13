import React from 'react'
import WHL from '../../component/WHL/WHL'
import vid from '../../component/Video/vid.mp4'
import { useSelector } from 'react-redux';
function WatchHistory() {
  const historyList=useSelector(state=>state.HistoryReducer);

 /* const history=[{
    _id:1,
    video_src: vid,
    chaneel:"62bafe6752cea35a6c30685f",
    title:"video 1",
    Uploader:"abc",
    description:"description of video 1"
  },

 
  {
  _id:2,
  video_src:vid,
  chanel :"cdd",
  title:"video 2",
  description:"description of video 2"
},

  ];*/
  return (
   <WHL page={"History"} videoList={historyList}/>
  )
}

export default WatchHistory