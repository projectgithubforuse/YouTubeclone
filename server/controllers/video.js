//import { assertPointerEvents } from '@testing-library/user-event/dist/cjs/utils/index.js';
import videoFiles from '../models/videoFiles.js'
export const uploadVideo=async(req,res,next)=>{
    if(req.file===undefined){
        res.status(404).json({message:"plz upload a mp4 video"})
    }else{
        try{
            const file=new videoFiles({
                videoTitle:req.body.title,
                fileName:req.file.originalname,
                filePath:req.file.path,
                fileType:req.file.mimetype,
                fileSize:req.file.size,
                videoChanel:req.body.chanel,
                uploader:req.body.Uploader,
            })
            await file.save();
            console.log("Done")
            res.status(200).send("file uploaded succesfully")
        }catch(error){
            res.status(400).send(error.message)
        }
    }
};
export const getAllvideos=async(req,res)=>{
    try{
        const files=await videoFiles.find();
        res.status(200).send(files)
    }catch(error){
        res.status(404).send(error.message)
    }
}