import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import {z} from "zod";

class DeliveriesLogsController {
    async create(request: Request, response: Response) {
        const bodySchema = z.object({
            delivery_id: z.string().uuid(),
            description: z.string(),
        })

        const {delivery_id, description} = bodySchema.parse(request.body);

        await prisma.deliveryLog.create({
            data: {
                deliveryId: delivery_id,
                description
            }
        });

        return response.status(201).json();
    }
}

export { DeliveriesLogsController }