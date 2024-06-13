import React from 'react'
import vid from '../../component/Video/vid.mp4'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../component/ShowVideoGrid/ShowVideoGrid';
import './YourVideo.css'
import { useSelector } from 'react-redux';
function YourVideo() {
  
/*    const vids=[{
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
  },{
    _id:3,
    video_src: vid,
    chaneel:"62bafe6752cea35a6c30685f",
    title:"video 3",
    Uploader:"abc",
    description:"description of video 1"
  },
  
  
  {
  _id:4,
  video_src:vid,
  chanel :"cdd",
  title:"video 4",
  description:"description of video 2"
  },];*/
  
  const CurrentUser=useSelector(state=>state?.currentUserReducer);
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel===CurrentUser?.result?._id).reverse();
 // const vids=useSelector(state=>state.videoReducer);
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className='container2_Pages_App'>
          <div className="container_yourvideo">
            <h1>Your Video</h1>
            {
              CurrentUser?(<>
              <ShowVideoGrid vids={vids}/>
              </>):<>
              <h3>plz login to see your uploaded video list</h3>
              </>
            }
          
          </div>
        </div>  
    </div>
  )
}

export default YourVideo