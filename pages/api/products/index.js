import Product from "../../../models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const { method, cookies } = req;
  const { token } = cookies;

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
    if (!token || token !== process.env.TOKEN) {
      console.log("token", token);
      console.log("process.env.token", process.env.TOKEN);
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
