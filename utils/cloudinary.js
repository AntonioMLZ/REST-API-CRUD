import {v2 as cloudinary} from 'cloudinary'
import {CLOUD_Name, CLOUD_API, CLOUD_Secret} from '../config.js'

cloudinary.config({ 
  cloud_name: CLOUD_Name, 
  api_key: CLOUD_API, 
  api_secret: CLOUD_Secret,
  secure: true
});


 export async function uploadImage(filePath) {
	return await cloudinary.uploader.upload(filePath, {
		folder: 'anime'
	})
}

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId)
}