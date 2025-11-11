import { Request, Response } from 'express';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

export const imageReceiver = (app: any) => {
    app.post('/upload-image', upload.single('image'), (req: Request, res: Response) => {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        // Process the image file here
        const imagePath = req.file.path;

        // You can add logic to send the image to the Python microservice for inference

        res.status(200).send({ message: 'Image uploaded successfully', path: imagePath });
    });
};