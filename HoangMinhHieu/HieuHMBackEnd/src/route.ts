import { Express, Request, Response } from "express";
import { createUserSchema, createUserSessionSchema } from "./schema/user.schema";
import { createUserHandler } from "./controller/user.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSessionHandler } from "./controller/session.controller";

export default function (app: Express){
    // app.get("/test", (req: Request, res: Response) => res.sendStatus(200));

    app.post("/api/users", validateRequest(createUserSchema), createUserHandler)

    app.post("/api/sessions", validateRequest(createUserSessionSchema), createUserSessionHandler);
}