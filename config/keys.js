module.exports = {
  mongoURI: process.env.WORK_LOG_MONGO_URI,
  secretOrKey: process.env.WORK_LOG_SECRET,
  cloudinary_config: {
    cloud_name: process.env.WORK_LOG_IMAGE_CLOUDNAME,
    api_key: process.env.WORK_LOG_IMAGE_API_KEY,
    api_secret: process.env.WORK_LOG_IMAGE_API_SECRET
  }
};
