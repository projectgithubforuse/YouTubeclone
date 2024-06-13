import History from '../models/History.js'
import mongoose from 'mongoose'
export const HistoryController=async(req,res)=>{
    const HistoryData=req.body;
    console.log(HistoryData)
    const addToHistory=new History(HistoryData);
    try{
         await addToHistory.save();
         res.status(200).json('added to watchlater')
         //console.log("Done")
    }catch(error){
        res.status(404).json(error)
    }
 }
 export const getAllHistoryController=async(req,res)=>{
    try{
        const data=await History.find();
        res.status(200).send(data)
    }catch(error){
        res.status(404).send(error.message)
    }
}


export const deleteHistoryController=async(req,res)=>{
    const {userId:userId}=req.params;
    console.log(userId)
    try{
        await History.deleteMany({
           Viewer:userId
        })
        res.status(200).json({message:"removed from watch later"})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}