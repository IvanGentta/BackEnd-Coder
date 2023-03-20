import { Router } from "express";

export const webRouter = Router();

webRouter.get("/api/personas", (req, res) => {
  res.json();
});
webRouter.post("/api/personas", (req, res) => {
  res.json();
});
