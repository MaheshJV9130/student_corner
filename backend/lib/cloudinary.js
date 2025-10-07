import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "socket-verse",
  api_key: 788783621896859,
  api_secret: "XvHvJWBBcc7c9qExtzdOou9ajF0",
});
const bufferToUrl = async (file) => {
  try {
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(file.buffer);
    });

    return uploadResult.secure_url;
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    throw new Error("Image upload failed");
  }
};

export default bufferToUrl;
