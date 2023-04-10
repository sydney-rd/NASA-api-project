import {Router} from "express";
import * as controllers from "../controllers/astronomy.js"

const router = Router();

// gets /countries from index
router.get('/', controllers.getModels) // gets all countries
router.get('/id/:id',controllers.getModel);
router.post('/', controllers.createModel);
router.put('/id/:id', controllers.updateModel);
router.delete('/id/:id', controllers.deleteModel);

export default router;