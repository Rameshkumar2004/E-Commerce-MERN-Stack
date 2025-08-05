import express from "express"
import {registerController,loginController,testController} from "../Controller/authcontroller.js"
import { isAdmin, requireSignIn } from "../Middlewares/authMiddlewares.js";

const router=express.Router()

router.post("/register", registerController);

//Login ||Post
router.post("/login",loginController)

// test routes
 router.get("/test", requireSignIn, isAdmin ,testController);

export default router