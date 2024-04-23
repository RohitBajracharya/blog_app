import { v2 as cloudinary } from "cloudinary";
import fs from "node:fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    console.log("local file: ", localFilePath);
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        console.log("response cl:", response);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        console.log("error in cloudinary: ", error);
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export { uploadOnCloudinary };
