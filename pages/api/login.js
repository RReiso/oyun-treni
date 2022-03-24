import cookie from "cookie";

const handler = (req, res) => {
  if (req.metod === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.USERNAME &&
      password === process.env.PASSWORD
    ) {
      res.setHeaders(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60 * 24,
          sameSite: "strict",
          path: "/",
          httpOnly,
        })
      );
      res.status(200).json("Successful");
    } else {
      res.status(400).json("Wrong user/password combination");
    }
  }
};

export default handler;
