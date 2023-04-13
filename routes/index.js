import { Router } from "express";
import astronomyRoutes from "./astronomy.js";

const router = Router();

router.use("/astronomy", astronomyRoutes);

export default router;
