import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
  cloud_name: process.env.CLD_NAME, 
  api_key: process.env.CLD_API_KEY, 
  api_secret: process.env.CLD_API_SECRET
});

const bufferToUrl = async (file) => {
  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(file.buffer);
    });

    
   return result.secure_url

  } catch (err) {
    
    return err
  }

}

export default bufferToUrl