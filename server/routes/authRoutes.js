import { Router } from "express";
import { registerUser, loginUser, getUsers } from "../controllers/authController.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/users").get(getUsers)

export default router;
