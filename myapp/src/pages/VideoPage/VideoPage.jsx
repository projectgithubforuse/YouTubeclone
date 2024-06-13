import React, { useEffect } from 'react'
import vid from '../../component/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../component/Comments/Comments'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { addToHistory } from '../../action/History'
import { viewVideo } from '../../action/video'
function VideoPage() {
    const {vid}=useParams();
    //console.log(vid)
    //const chanels=useSelector((state)=>state.chanelReducers);
  //console.log(chanels);
  //const currentChanel=chanels.filter((c)=>c._id === vid)[0];
  //console.log(currentChanel);
    const vids=useSelector(state=>state.videoReducer);
    const vv=vids?.data.filter((q)=>q._id === vid)[0];
    const dispatch=useDispatch();
    const CurrentUser=useSelector((state)=>state?.currentUserReducer);
    const handleHistory=()=>{
       dispatch(
        addToHistory(
            {
                videoId:vid,
                Viewer:CurrentUser?.result._id,
            }
        )
       )
    }
    const handleViews=()=>{
        dispatch(viewVideo({
            id:vid
        }))
    }
    useEffect(()=>{
        if(CurrentUser){
        handleHistory();
        }
        handleViews();
    },[]);
  return (
    <>
    <div className="container_videoPage">
        <div className='container2_videoPage'>
            <div className="video_display_screen_videoPage">
                <video 
                src={`http://localhost:5500/${vv.filePath}`}
                className={"video_ShowVideo_videoPage"}
                controls
                //</div>autoPlay
                ></video>
                <div className="video_details_videoPage">
                    <div className="video_btns_title_VideoPage_cont">
                        <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                        <div className="views_date_btns_VideoPage">
                            <div className="views_VideoPage">
                                {vv?.Views} views <div className="dot"></div>{" "} {moment(vid?.createdAt).fromNow()}
                            </div>
                            <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
                        </div>
                    </div>
                    
                    <Link to={`/chanel/${vv?.videoChanel}`} className="chanel_details_videoPage">
                        <b className="chanel_logo_videoPage">
                            <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
                        </b>
                        <p className="chanel_name_videoPage">{vv?.uploader}</p>
                    </Link>
                    <div className="comments_VideoPage">
                        <h2>
                            <u>Comments</u>
                        </h2>
                        <Comments videoId={vv._id}/>
                    </div>
                </div>
            </div>
            <div className="moreVideoBar">
                More Video
            </div>
        </div>

        </div></>
  )
}

export default VideoPage