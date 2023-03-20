import { Router } from "express";

export const apiRouter = Router();

apiRouter.use(express.json());
apiRouter.use(express.urlencoded({ extended: true }));
