import express from "express"
import { forgotPassword, login, logout, register, resetPassword } from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/register",register)
router.post("/login", login )
router.post("/logout", logout )
router.post("/forgot-password", forgotPassword )
router.post("/reset-password", resetPassword )

export default router;