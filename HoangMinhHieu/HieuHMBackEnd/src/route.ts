import { Express, Request, Response } from "express";

export default function (app: Express){
    app.get("/test", (req: Request, res: Response) => res.sendStatus(200));
}