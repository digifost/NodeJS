import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../../common/helper/models/apiError";

export function authMiddleware(request: Request, response: Response, next: NextFunction)
{
    return next();
}