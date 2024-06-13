import React, { useState } from 'react'
import './CreateEditChannel.css'
import { useDispatch, useSelector } from 'react-redux';
//import { useEffect } from 'react';
import { login } from '../../action/auth';
import { updateChanelData } from '../../action/chanelUser';
function CreateEditChannel({setEditCreateChanelBtn}) {
//    const CurrentUser={
//        result:{
//          email:"xyz@gmail.com",
//          joinedOn:"2222-07-15T09:57:23.4892",
//        },
//      };
      const CurrentUser=useSelector(state=>state.currentUserReducer);
      const [name,setName]=useState(CurrentUser?.result.name);
      const [desc,setDesc]=useState(CurrentUser?.result.desc);
      const dispatch=useDispatch();
     
      const handleSubmit=()=>{
        if(!name){
            alert("plz enter name");
        } else if(!desc){
            alert("plz enter description");
        } else{
            dispatch(
                updateChanelData(CurrentUser?.result._id,{
                name:name,
                desc:desc
        }));
            setEditCreateChanelBtn(false);
            setTimeout(()=>{
                dispatch(login({email:CurrentUser?.result.email}));
            },5000)
        }
      }
  return (

  <div className="container_CreateEditChanel">
    <input onClick={()=>setEditCreateChanelBtn(false)} type='submit' name='text' value={'x'} className='ibtn_x'/>
    <div className="container2_CreateEditChanel">
        <h1>{
             CurrentUser?.result.name?<>
             Edit
             </>:
             <>Create</>
            }
            Your Chanel</h1>
            <input type='text' placeholder='Enter your chanel name' className="ibox" name='text' value={name}
             onChange={(e)=>setName(e.target.value)}/>
            <textarea type="text" rows={15} placeholder={'enter discription'} className={'ibox'} value={desc}
             onChange={(e)=>setDesc(e.target.value)}/>
            <input type='submit' value={"submit"} onClick={handleSubmit} className='ibtn'/>

    </div>
  </div>
  )
}

export default CreateEditChannel