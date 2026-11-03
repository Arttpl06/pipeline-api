import { Router } from "express";
import healthControllers from '../controllers/healthControl.js'

const router = Router();
const controller = new healthControllers();


router.get("/" , controller.index);



export default router;