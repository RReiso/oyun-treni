import cookie from "cookie";

const handler = (req, res) => {
  console.log("HERE");
  if (req.method === "POST") {
    console.log("logout", req.cookie);
    res.writeHead(200, {
      "Set-Cookie": `token=; HttpOnly; path=/; max-age=0`,
    });
    return res.status(200).send({ message: "User logged out!" });
  }
};

export default handler;
