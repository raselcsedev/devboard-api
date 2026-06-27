import { Router } from "express";
import authRouter   from "../modules/auth/auth.routes.js";
import usersRouter  from "../modules/users/users.routes.js";
import boardsRouter from "../modules/boards/boards.routes.js";

const router = Router();

router.use("/auth",   authRouter);
router.use("/users",  usersRouter);
router.use("/boards", boardsRouter);

export default router;