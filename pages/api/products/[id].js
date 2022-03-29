import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  const { token } = cookies;

  dbConnect();

  if (method === "GET") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      let cloudinary = require("cloudinary").v2;

      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      const product = await Product.findById(id);
      let imgCloudinaryID = product.img.match(/alitoys(.*?)\./)[0];
      imgCloudinaryID = imgCloudinaryID.substring(
        0,
        imgCloudinaryID.length - 1
      );

      cloudinary.uploader.destroy(imgCloudinaryID);

      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
