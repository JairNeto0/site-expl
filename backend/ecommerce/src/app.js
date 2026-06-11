import express from "express";
import cors from "cors";

import employeeRoutes from "./modules/employees/routes/employeeRoutes.js";
import overtimeRoutes from "./modules/employees/routes/overtimeRoutes.js";
import vacationRoutes from "./modules/employees/routes/vacationRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando!"
  });
});

app.use("/employees", employeeRoutes);
app.use("/overtime", overtimeRoutes);
app.use("/vacations", vacationRoutes);

export default app;