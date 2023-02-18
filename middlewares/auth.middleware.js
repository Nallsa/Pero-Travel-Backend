const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json("Нет доступа!");
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer") {
    res.status(401).json("Неверный тип токен!");
  }
  try {
    req.user = await jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (e) {
    res.status(401).json("Ошибка " + e.toString());
  }
};
