import express from 'express';
import multer from 'multer';
import path, { format } from 'path';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier'; // Required for handling streams


const router = express.Router();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

// ✅ Use memory storage instead of disk storage
const storage = multer.memoryStorage();
// diskStorage({
//     destination: (req, file, cb) => {
//         // Ensure that the 'public/image' folder exists
//         cb(null, 'public/image');  // Set the destination folder for the uploaded file
//     },
//     filename: (req, file, cb) => {
//         // Generate a filename using the name passed in the body (if provided) or create one with a timestamp
    
//         const fileExtension = path.extname(file.originalname);  // Get file extension

//         //console.log(req.body)
//         const fileName = req.body.fileName;
//         //console.log(fileName)
//         cb(null, fileName);  // Use this new filename for the uploaded file
        
//     }
// });
const upload = multer({ storage: storage });

// ✅ Function to upload file buffer to Cloudinary using a stream
const streamUpload = (buffer,fileName) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'postImg', public_id: fileName },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );
        streamifier.createReadStream(buffer).pipe(stream); // ✅ Convert buffer to stream
    });
};

// ✅ Route to upload file
router.post('/', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        const uploadResult = await streamUpload(req.file.buffer,req.body.fileName); // ✅ Upload buffer to Cloudinary
        console.log(uploadResult)
        return res.status(200).json({ 
            message: 'File uploaded successfully', 
            url: uploadResult.secure_url,
            format:null
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
