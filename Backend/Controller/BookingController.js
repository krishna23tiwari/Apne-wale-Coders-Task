// const bookingModel = require('../Model/BookingModel')


// exports.bookingData = async(req, res) => {
//     const {name, email, phone, resumelink, services, date, time} = req.body

//     let resumeUrl = '';
//     if(req.files && req.files.resumelink){
//         const files = req.files.resumelink
//     }

//     const uploaded = await new Promise((resolve, reject) => {
//         cloudinary.uploader.upload_stream(
//           { resource_type: "raw" }, // Required for PDF, DOC, etc.
//           (error, result) => {
//             if (error){
//                  reject(error);
//             }     
//             else {
//             resolve(result);
//           }
//         ).end(file.data);
//       });

//       resumeUrl = uploaded.secure_url; 
//      else {
//       return res.status(400).json({ message: "Resume file is required" });
//     }

//     const booking = new bookingModel({
//         userId : req.user._id,
//         name,
//         email,
//         phone,
//         resumelink,
//         services,
//         date,
//         time
//     })

//     if(!booking){
//         return res.status(400).json({message : "Error saving the data"})
//     }

//     await booking.save()

//     return res.status(200).json({message : "Data save successfully"})
// }


require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const bookingModel = require('../Model/BookingModel');
const {uploadFile} = require('../Utils/FileUpload');

exports.bookingData = async (req, res) => {
  const { name, email, phone, services, date, time } = req.body;

  let files = req.files && req.files.resumelink;
  if (!files) files = [];
  else if (!Array.isArray(files)) files = [files];

  let imageUrls = [];
  if (files.length) {
    const uploadResults = await uploadFile(files); // same upload function used in addRoom
    imageUrls = uploadResults.map(r => r.secure_url);
  } else {
    return res.status(400).json({ message: "Image file is required" });
  }

  const booking = new bookingModel({
    userId: req.user._id,
    name,
    email,
    phone,
    resumelink: imageUrls, // array of image URLs
    services,
    date,
    time
  });

  await booking.save();

  return res.status(200).json({ message: "Data saved successfully" });
};
  