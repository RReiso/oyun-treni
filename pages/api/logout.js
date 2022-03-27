const handler = (req, res) => {
  if (req.method === "POST") {
    res.writeHead(200, {
      "Set-Cookie": `token=; HttpOnly; path=/; max-age=0`,
    });
    return res.status(200).send({ message: "User logged out!" });
  }
};

export default handler;
