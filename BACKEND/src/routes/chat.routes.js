import { Router } from "express";
import { createMessage, getMessages } from "../controllers/chat.controller.js";
import { upload } from "../middleware/multer.middleware.js"
const router = Router()

router.route("/createmessage").post(upload.single("file"),createMessage)

router.route("/getmessages").post(getMessages)


export default router 