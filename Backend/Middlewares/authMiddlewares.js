import JWT from "jsonwebtoken";
import userModel from "../Model/userModel.js";

// ————————————————————————— requireSignIn ——————————————————————————
export const requireSignIn = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "Authorization token missing" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded;4
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

// ————————————————————————— isAdmin ——————————————————————————
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id).select("role");
    if (!user || user.role !== 1) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized access" });
    }
    next();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error in admin middleware", error });
  }
};
