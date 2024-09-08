// biome-ignore lint/style/useImportType: <explanation>
import { Prisma } from "@prisma/client";

export type PermissionType = Prisma.PermissionGetPayload<{
    select: {
        email: true,
        role: true,
    }
}>

export type PermissionRoles = Prisma.PermissionGetPayload<{
    select: {
        role: true,
    }
}>