import {Router} from "express";
import * as controllers from "../controllers/astronomy.js"

const router = Router();

router.get('/', controllers.getAPODs) 
router.get('/id/:id',controllers.getAPOD);
router.get('id/:id/:id', controllers.getAPODByDate)
router.post('/', controllers.createAPOD);
// postman
// copy obj
// click body  raw JSON
// delete V & ID
// post
router.put('/id/:id', controllers.updateAPOD);
router.delete('/id/:id', controllers.deleteAPOD);

export default router;