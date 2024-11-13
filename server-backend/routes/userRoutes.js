import { Router } from "express";
import { getUsers, login, signUp } from "../controllers/userControllers.js"


const userRouter = Router();

userRouter.post("/signup", signUp);

userRouter.post("/login", login);

userRouter.post("/user", getUsers);



export default userRouter;