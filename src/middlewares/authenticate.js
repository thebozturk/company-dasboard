const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");

function parseCookies(request) {
  var list = {},
    rc = request.headers.cookie;

  rc &&
    rc.split(";").forEach(function (cookie) {
      var parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });

  return list;
}

const authenticateToken = (req, res, next) => {
  const token = parseCookies(req)["authorization"];
  if (token === null)
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "You must be logged in to do this." });
  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) return res.status(httpStatus.FORBIDDEN).send({ error: err });
    req.user = user?._doc;
    next();
  });
};

module.exports = authenticateToken;
