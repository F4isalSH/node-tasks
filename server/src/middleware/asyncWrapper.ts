import { NextFunction, Request, Response } from "express";

const asyncWrapper = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res);
    } catch (err: any) {
      next(err);
    }
  };
};

module.exports = asyncWrapper;
