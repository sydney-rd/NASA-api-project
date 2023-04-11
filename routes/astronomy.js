import {Router} from "express";
import * as controllers from "../controllers/astronomy.js"

const router = Router();


router.get('/', controllers.getAPODs) 
router.get('/id/:id',controllers.getAPOD);
router.post('/', controllers.createAPOD);
router.put('/id/:id', controllers.updateAPOD);
router.delete('/id/:id', controllers.deleteAPOD);

export default router;