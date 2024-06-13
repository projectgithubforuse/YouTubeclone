import React, { useState } from 'react'

import './VideoUpload.css'
import { useDispatch, useSelector } from 'react-redux'
import { uploadVideo } from '../../action/video';
import {buildStyles,CircularProgressbar}  from 'react-circular-progressbar'
function VideoUpload({setVidUploadPage}) {
    const CurrentUser=useSelector(state=>state.currentUserReducer)
    const dispatch=useDispatch();
    const [title,setTitle]=useState("")
    const [videoFile,setVideoFile]=useState("")
    const handleSetVideoFile=(e)=>{
        setVideoFile(e.target.files[0]);
    
    }
    const [progress,setProgress]=useState(0);
    const fileOptions={
      onUploadProgress:(ProgressEvent)=>{
        const {loaded,total}=ProgressEvent;
        const percentage=Math.floor(((loaded/1000)*100)/(total/1000));
        setProgress(percentage)
        if(percentage===100){
          setTimeout(function(){},3000);
          setVidUploadPage(false);
        }
      }
    }
    const uploadVideoFile=()=>{
       if(!title){
        alert("plz enter title of video")

       }else if(!videoFile){
        alert("plz enter video file")
       }else if(videoFile.size>1000000000){
        alert("plz enter video file less than 1kb")
       }else{
        const fileData=new FormData();
        fileData.append("file",videoFile);
        fileData.append("title",title);
        fileData.append("chanel",CurrentUser?.result._id);
        fileData.append("Uploader",CurrentUser?.result.name);
        //console.log(videoFile)
        dispatch(uploadVideo({
            fileData:fileData, fileOptions:fileOptions
        }))
       }
    }
  return (
    <div className='container_vidUpload' >
       <input 
       type='submit' name='text' value={'x'} onClick={()=>setVidUploadPage(false)} className='ibtn_x'/>
       <div className='container2_vidUpload'>
        <div className='ibox_div_vidUpload'>
        <input 
        onChange={(e)=>setTitle(e.target.value)}
        type='text' className='ibox_vidUpload'
        maxLength={30} placeholder='the title of your video'/>
       
       <label htmlFor='file' className='ibox_vidUpload btn_vidUpload'>
        <input type='file' name='file' className='ibox_vidUpload'
        style={{fontSize:"1rem"}} onChange={(e)=>{handleSetVideoFile(e)}}/>
       </label>
       </div>
       <div className='ibox_div_vidUpload'>
        <input 
        onClick={()=>uploadVideoFile()}
        type='submit'  value='Upload'
        className='ibox_vidUpload btn_vidUpload'/>
       </div>
       <div className='loader ibox_div_vidUpload'>
        <CircularProgressbar
        value={progress}
        text={`${progress}`}
        styles={buildStyles({
          rotation:0.25,
          strokeLinecap:"butt",
          textSize:"20px",
          pathTransitionDuration:0.5,
          pathColor:`rgba(255,255,255,${progress/100})`,
          textColor:"#f88",
          trailColor:"#adff2f",
          backgroundColor:"#3e98c7"
        })

        }
        />
       </div>
       </div>
    </div>
  )
}

export default VideoUpload;