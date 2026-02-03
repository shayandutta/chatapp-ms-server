import express from "express";
import type { Application, Request, Response } from "express";


export const createApp = () : Application => {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/health", (req: Request, res: Response) => {
        res.send("OK");
    });

    return app;
}