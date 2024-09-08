import type { Prisma } from "@prisma/client";

export type WorkType = Prisma.WorkGetPayload<{
    select:{
        createdAt: true,
        description: true,
        updatedAt: true,
        nextID: true,
        prevID: true,
        userID: true,
        finish: true,
        end: true,
        start: true,
    }
}>