import cookie from "cookie";

const handler = (req, res) => {
  if (req.method === "POST") {
    console.log("first");
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60 * 24,
          sameSite: "strict",
          path: "/",
          httpOnly: true,
        })
      );
      res.status(200).json("Successful");
    } else {
      res.status(400).json("Wrong user/password combination");
    }
  }
};

export default handler;
