import express from "express";
import * as controller from "../controllers/overtimeController.js";

const router = express.Router();

router.post("/", controller.create);

router.get("/", controller.list);

router.get(
  "/employee/:employeeId",
  controller.listByEmployee
);

export default router;