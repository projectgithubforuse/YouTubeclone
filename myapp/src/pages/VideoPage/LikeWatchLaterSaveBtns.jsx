import React, { useEffect, useState } from 'react'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import './LikeWatchLaterSaveBtns.css'
import { BsThreeDots } from 'react-icons/bs';
import { MdPlaylistAddCheck } from 'react-icons/md';
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo } from '../../action/video';
//import { addToLikeVideo, addToLikedVideo } from '../../api';
import { addTolikedVideo, deletelikedVideo } from '../../action/likedVideo';
import { addTowatchLater, deleteWatchLater } from '../../action/watchLater';
//import { deleteWatchLater } from '../../api';

function LikeWatchLaterSaveBtns({vv,vid}) {
    const CurrentUser=useSelector(state=>state?.currentUserReducer);
    const dispatch=useDispatch();
    const [SaveVideo,setSaveVideo]=useState(false);
    const [DislikeBtn,setDislikeBtn]=useState(false);
    const [LikeBtn,setLikeBtn]=useState(false);
    const likedVideoList=useSelector(state=>state.likedVideoReducer)
    const watchLaterList=useSelector(state=>state.watchLaterReducer);

    useEffect(()=>{
         likedVideoList?.data.filter(q=>q?.videoId===vid && q?.Viewer===CurrentUser?.result._id).map(m=>setLikeBtn(true))
         watchLaterList?.data.filter(q=>q?.videoId===vid && q?.Viewer===CurrentUser?.result._id).map(m=>setSaveVideo(true))
    },[])
    const toggleSavedVideo=()=>{
    if(CurrentUser){
        if(SaveVideo){
            setSaveVideo(false);
           dispatch(deleteWatchLater({
            videoId:vid,
            Viewer:CurrentUser?.result._id,
           })
        );
        
        }else{
            setSaveVideo(true);
            dispatch(addTowatchLater({
                videoId:vid,
                Viewer:CurrentUser?.result._id,
            }))
        }
        }else{
        alert("plz login to save the video")
       }
    }
    const toggleLikeBtn=(e,lk)=>{
      if(CurrentUser)  {
        if(LikeBtn){
            setLikeBtn(false);
            dispatch(likeVideo({
                id:vid,Like:lk-1,
        }
    ));
    dispatch(deletelikedVideo({
        videoId:vid,
        Viewer:CurrentUser?.result._id,        
    }))
        }else{
            setLikeBtn(true);
            dispatch(
                likeVideo({
                    id:vid,Like:lk+1,
                })
            );
            dispatch(addTolikedVideo({
                videoId:vid,
                Viewer:CurrentUser?.result._id,
            }));
            setDislikeBtn(false);
        }
      }else{
        alert("plz login to give a like")
      }
    };

    const toggleDislikeBtn=(e,lk)=>{
      if(CurrentUser){  
        if(DislikeBtn){
            setDislikeBtn(false);
        }else{
            setDislikeBtn(true);
            if(LikeBtn){
                dispatch(
                    likeVideo({
                        id:vid,Like:lk-1,
                    })
                )
                dispatch(deletelikedVideo({
                    videoId:vid,
                    Viewer:CurrentUser?.result._id,     
                }))                                
            }
            setLikeBtn(false)
        }
    }else{
        alert("plz login to give a like")
      }        
    };
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_videoPage">
            <BsThreeDots/>
        </div>
        <div className="btn_videoPage">
            <div className="like_videoPage" onClick={(e)=>toggleLikeBtn(e,vv.Like)}>
                {LikeBtn? (
                    <>
                    <AiFillLike size={22} className='btns_videoPage'/>
                    </>
                ):(
                    <>
                    <AiOutlineLike size={22} className='btns_videoPage'/>
                    </>
                )}
                <b>{vv.Like}</b>
            </div>
            <div className="like_videoPage" onClick={(e)=>toggleDislikeBtn(e,vv.Like)}>
            {DislikeBtn? (
                    <>
                    <AiFillDislike size={22} className='btns_videoPage'/>
                    </>
                ):(
                    <>
                    <AiOutlineDislike size={22} className='btns_videoPage'/>
                    </>
                )}
                <b>DISLIKE</b>
            </div>
            <div className="like_videoPage" onClick={()=>toggleSavedVideo()}>
            {SaveVideo? (
                    <>
                     <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
                    <b>Saved</b>
                    </>
                ):(
                    <>
                   <RiPlayListAddFill size={22} className='btns_videoPage'/>
                    <b>save</b>                    

                    </>
                )}
               
            </div>
            <div className="like_videoPage">
                <>
                <RiHeartAddFill size={22} className='btns_videoPage'/>
                <b>Thanks</b>
                </>
            </div>
            <div className="like_viddeoPage">
                <>
                <RiShareForwardLine size={22} className='Btns_videoPage'/>
                <b>Shared</b>
                </>
            </div>
        </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns