import watchLater from '../models/watchLater.js'
import mongoose from 'mongoose'
export const watchLaterController=async(req,res)=>{
    const watchLaterData=req.body;
    console.log(watchLaterData)
    const addTowatchLater=new watchLater(watchLaterData);
    try{
         await addTowatchLater.save();
         res.status(200).json('added to watchlater')
         //console.log("Done")
    }catch(error){
        res.status(404).json(error)
    }
 }
 export const getAllwatchLaterController=async(req,res)=>{
    try{
        const data=await watchLater.find();
        res.status(200).send(data)
    }catch(error){
        res.status(404).send(error.message)
    }
}


export const deletewatchLaterController=async(req,res)=>{
    const {videoId:videoId,Viewer:Viewer}=req.params;
    try{
        await watchLater.findOneAndDelete({
            videoId:videoId,Viewer:Viewer
        })
        res.status(200).json({message:"removed from watch later"})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}