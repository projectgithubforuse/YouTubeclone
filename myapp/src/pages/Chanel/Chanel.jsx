import React from 'react'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../component/ShowVideoGrid/ShowVideoGrid'
import vid from '../../component/Video/vid.mp4'
import DescribeChanel from './DescribeChanel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Chanel({setEditCreateChanelBtn,setVidUploadPage}) {

/*    const {Cid}=useParams();
    const vids=[{
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
    },];*/
    const {Cid}=useParams();
    const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === Cid).reverse();    
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
            <DescribeChanel
            Cid={Cid}
            setVidUploadPage={setVidUploadPage}
            setEditCreateChanelBtn={setEditCreateChanelBtn}/>
            <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  );
}

export default Chanel