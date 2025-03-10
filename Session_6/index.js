const express = require('express');
const upload = require('./middleware/fileupload');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Application listening to PORT ${PORT}`);
});

// //Code for Single upload
// app.post('/upload', upload.single('image'), (req, res) => {
//     cloudinary.uploader.upload(req.file.path,
//         (error, result) => {
//             if(error){
//                 return res.status(500).send({message: "Cloud not upload image"});
//             }
//             fs.unlinkSync(req.file.path); //delete temp file
//             res.status(200).send({
//                 message: "Image uploaded Successfully",
//                 image_url: result.secure_url})
//         });
// });

//Code for Single upload
app.post('/upload', upload.single('image'), async(req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path); //delete temp file
        res.status(200).send({
            message: "Image uploaded Successfully",
            image_url: result.secure_url
        });
    } catch (error) {
        return res.status(500).send({message: "Cloud not upload image"});
    }
});

//Code Multiple upload
app.post('/multiupload', upload.array('images', 3), async(req, res) => {
    try {
        const images = [];
        for(let file of req.files){
            const result = await cloudinary.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path); //delete temp file
        }
        res.status(200).send({message:'upload done', images});
           
    } catch (error) {
        // console.log(error);
        res.status(500).send({message:'Error while image upload', error});
    }
});


