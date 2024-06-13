import React from 'react'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar';
import './Home.css'
import ShowVideoGrid from '../../component/ShowVideoGrid/ShowVideoGrid';
import vid from '../../component/Video/vid.mp4'
import { useSelector } from 'react-redux';
//import { upload } from '@testing-library/user-event/dist/upload';
function Home() {
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  //console.log(vids)

/*  const vids=[{
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


];*/
const NavList=[
  "All",
  "Python",
  "Java",
  "C++",
  "Movies",
  "Science",
  "Animations",
  "Gaming",
  "Comedy1",
  "Movies1",
  "Science1",
  "Animation2",
  "Gaming1",
  "Comedy2",
  "Java1",
  "C++1",
  "Movies2",
  "Science2",
  "Comedy3",
];
  return (
    
    <div className="container_Pages_App">
        <LeftSidebar/>
        <div className="container2_Pages_App">
        
          <div className="navigation_Home">
            {
              NavList.map((m)=>{
                return(
                  <p key={m} className="btn_nav_home">
                    {m}
                  </p>)
                }
              )
            }
            
          </div>
          <ShowVideoGrid vids={vids}/>
        </div>
        
     </div>
    
  );
  
}

export default Home;