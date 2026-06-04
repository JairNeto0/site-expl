import express from "express";
import * as controller from "../controllers/employeeController.js";

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/:id", controller.find);

export default router;