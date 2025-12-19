import { Request, Response } from "express";
import { User } from "./user.model";

export async function createUser(req: Request, res: Response) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Failed to create user" });
  }
}

export async function getUsers(_req: Request, res: Response) {
  const users = await User.find();
  res.json(users);
}