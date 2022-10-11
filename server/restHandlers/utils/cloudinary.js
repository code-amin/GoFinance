require("dotenv").config();
// CLOUDINARY LETS US UPLOAD IMAGES TO THEIR CLOUD AND CREATES AN URL FOR US TO USE
const cloudinary = require("cloudinary").v2;
const { REACT_APP_CLOUDINARY_API_KEY } = process.env;
const { REACT_APP_CLOUDINARY_API_SECRET } = process.env;
const { REACT_APP_CLOUDINARY_NAME } = process.env;

cloudinary.config({
  cloud_name: REACT_APP_CLOUDINARY_NAME,
  api_key: REACT_APP_CLOUDINARY_API_KEY,
  api_secret: REACT_APP_CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };
