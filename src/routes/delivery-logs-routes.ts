import { Router } from "express";

import { DeliveriesLogsController } from "../controllers/deliveries-logs-controller";

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const deliveryLogsRoutes = Router();

const deliveryLogsController = new DeliveriesLogsController();

deliveryLogsRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["sale"]),deliveryLogsController.create);

export { deliveryLogsRoutes };