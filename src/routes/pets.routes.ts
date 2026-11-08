import express from "express";
import type { Router, Request, Response } from "express";

import { getPets, getPetById } from "../controller/pets.controller";

import { validateNumericId, pleaseAuth } from "../middleware/pets.middleware";

export const petRouter: Router = express.Router();

petRouter.get("/", getPets);
petRouter.get("/:id", pleaseAuth, validateNumericId, getPetById);