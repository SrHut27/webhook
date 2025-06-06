import express, { Request, Response, NextFunction, Express } from "express";

export default class Middlewares {
    static aplly(instance: Express):
    void {
        instance.use(express.json({
            verify: (req, res, buf) => {
                (req as any).rawBody = buf
            }
        }));
    }
}