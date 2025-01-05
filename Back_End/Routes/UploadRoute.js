import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure that the 'public/image' folder exists
        cb(null, 'public/image');  // Set the destination folder for the uploaded file
    },
    filename: (req, file, cb) => {
        // Generate a filename using the name passed in the body (if provided) or create one with a timestamp
        const timestamp = Date.now();
        const fileExtension = path.extname(file.originalname);  // Get file extension
        const fileName = req.body.name ? req.body.name : `${timestamp}-${file.originalname}`;
        cb(null, fileName);  // Use this new filename for the uploaded file
    }
});

// Initialize multer with the defined storage configuration
const upload = multer({ storage: storage });

// Define the POST route to handle file upload
router.post('/', upload.single('file'), (req, res) => {
    try {
        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        // Send success response if the file was uploaded
        return res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
