import { Router } from "express";
import { signup, login, verifyUser } from "../controllers/authControllers"

const router = Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/verify", verifyUser)

export default router