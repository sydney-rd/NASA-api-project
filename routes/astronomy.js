import {Router} from "express";
import * as controllers from "../controllers/astronomy.js"

const router = Router();

// gets /countries from index
router.get('/', controllers.getAPODS) // gets all countries
router.get('/id/:id',controllers.getAPOD);
router.post('/', controllers.createAPOD);
router.put('/id/:id', controllers.updateAPOD);
router.delete('/id/:id', controllers.deleteAPOD);

export default router;