import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv"
import multer, { Multer } from 'multer';
import { cloudinary } from './utils/cloudinary';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const storage = multer.memoryStorage();

const upload: Multer = multer({ storage: storage });

const bootstrapServer = async () => {
    
    app.use(cors());
    app.use(express.json({limit: '50mb'}));
    app.use(express.urlencoded({limit: '50mb', extended: true}));
    app.get("/", (req, res) => {
        res.send("Welcome onboard!");
    });

    app.post("/api/upload", upload.single('image'), async (req: Request, res: Response) => {
        try {
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }
            
            const result = await cloudinary.uploader.upload_stream({ resource_type: 'auto' }, async (error, result) => {
                if (error) {
                    return res.status(500).json({ error: 'Error uploading image to Cloudinary.' });
                }

                // Handle the Cloudinary response, you can save the image URL or other details to your database
                const imageUrl = result.secure_url;
                const publicId = result.public_id;
                console.log(result);

                res.status(200).json({ imageUrl, publicId, msg: 'uploaded successfully' });
            }).end(req.file.buffer);
            
        } catch (err) {
            console.log(err);
            res.status(500).json({err: 'Something went wrong'});
        }
    });

    app.get("/api/images", async (req, res) => {
        const { resources } = await cloudinary.search
            .expression('folder:dev_uploads')
            .sort_by('public_id', 'desc')
            .max_results(30)
            .execute();

        const publicIds = resources.map((file) => file.public_id);
        res.send(publicIds);
    });

    app.listen(port, () => {
        console.log(`Server ready at http://localhost:${port}`)
    })
}

bootstrapServer();