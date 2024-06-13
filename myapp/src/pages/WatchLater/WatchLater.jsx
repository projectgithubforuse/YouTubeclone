import React from 'react'
import vid from  '../../component/Video/vid.mp4'
import WHL from '../../component/WHL/WHL'
import { useSelector } from 'react-redux';
function WatchLater() {
  const watchLaterList=useSelector(state=>state.watchLaterReducer);


 // console.log(watchLaterList)
 /* const WatchLater=[{
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
   <WHL page={"Watch Later"} videoList={watchLaterList}/>
  )
}
  
export default WatchLater