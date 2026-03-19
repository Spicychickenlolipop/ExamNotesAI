// import { get } from "mongoose";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser } from "../controllers/user.controller.js";
import express from "express";

const userRouter = express.Router();


userRouter.get("/currentuser",isAuth,getCurrentUser)

export default userRouter;