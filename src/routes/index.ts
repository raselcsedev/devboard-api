import { Router } from "express";
import authRouter   from "../modules/auth/auth.routes.js";
import usersRouter  from "../modules/users/users.routes.js";
import boardsRouter from "../modules/boards/boards.routes.js";
import tasksRouter  from "../modules/tasks/tasks.routes.js";

const router = Router();

router.use("/auth",   authRouter);
router.use("/users",  usersRouter);
router.use("/boards", boardsRouter);
router.use("/tasks",  tasksRouter);

export default router;