const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader)
    return res.status(401).json({ msg: "Không có token, truy cập bị từ chối" });

  // Tách token
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (err) {
    console.error("JWT verify error:", err.message);
    res.status(400).json({ msg: "Token không hợp lệ" });
  }
};

module.exports = auth;
