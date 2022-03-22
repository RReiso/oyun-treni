import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const allProducts = await Product.find();
      res.status(200).json(allProducts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}