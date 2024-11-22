const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token =
    req.header("Authorization") && req.header("Authorization").split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(400).send("Token requerido");
  }
  jwt.verify(token, "my_secret_key", (err, decode) => {
    if (err) {
      return res.status(401).send("Token invalido");
    }
    req.user = decode;
    console.log(decode);
    next();
  });
};

module.exports = { verifyToken };
