import {Router} from "express";
import usersControl from "../controllers/usersControl.js";

const router = Router();

const controller = new usersControl();

router.get('/' , controller.index);

export default router;