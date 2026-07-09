// import { Router } from "express";

// const router = Router();

// router.get("/", (_req, res) => {
//   res.json({ message: "Get all boards" });
// });

// router.post("/", (_req, res) => {
//   res.status(201).json({ message: "Create board" });
// });

// export default router;

// import { Router } from "express";
// import { successResponse } from "../../utils/apiResponse.js";
// import { AppError } from "../../errors/AppError.js";
// import { asyncHandler } from "../../utils/asyncHandler.js";

// const router = Router();

// router.get(
//   "/",
//   asyncHandler(async (_req, res) => {
//     res.json(successResponse("Boards fetched successfully", []));
//   }),
// );

// router.post("/", (_req, res) => {
//   res
//     .status(201)
//     .json(successResponse("Board created successfully", { id: "mock-id" }));
// });

// router.get("/error", (_req, _res) => {
//   throw new AppError(404, "Board not found");
// });
// export default router;



// import { Router } from "express";
// import { successResponse } from "../../utils/apiResponse.js";

// const router = Router();

// // GET /api/v1/boards?page=1&limit=10&search=react&sort=createdAt&order=desc
// router.get("/", (req, res) => {
//   const { page = "1", limit = "10", search = "", sort = "createdAt", order = "desc" } = req.query;

//   // log so you can see how Express parses query strings
//   console.log("req.query →", req.query);

//   res.json(successResponse("Boards fetched successfully", {
//     query  : { page, limit, search, sort, order },
//     boards : [],
//   }));
// });

// // GET /api/v1/boards/:id/tasks
// router.get("/:id/tasks", (req, res) => {
//   res.json(successResponse("Tasks fetched successfully", {
//     boardId : req.params.id,
//     tasks   : [],
//   }));
// });

// // POST /api/v1/boards/:id/tasks
// router.post("/:id/tasks", (req, res) => {
//   res.status(201).json(successResponse("Task created successfully", {
//     boardId : req.params.id,
//     task    : { id: "mock-task-id", title: "New task" },
//   }));
// });

// // GET /api/v1/boards
// router.post("/", (_req, res) => {
//   res.status(201).json(successResponse("Board created successfully", { id: "mock-id" }));
// });
// export default router;




// import { Router } from "express";
// import { successResponse } from "../../utils/apiResponse.js";
// import { AppError } from "../../errors/AppError.js";

// const router = Router();

// router.get("/", (req, res) => {
//   console.log("req.query →", req.query);
//   res.json(successResponse("Boards fetched successfully", { boards: [] }));
// });

// router.post("/", (_req, res) => {
//   res.status(201).json(successResponse("Board created successfully", { id: "mock-id" }));
// });

// router.delete("/:id", (_req, res) => {
//   res.status(204).send();
// });

// // Simulated 404
// router.get("/:id/error", (_req, _res, next) => {
//   next(new AppError(404, "Board not found"));
// });

// router.get("/:id/tasks", (req, res) => {
//   res.json(successResponse("Tasks fetched successfully", { boardId: req.params.id, tasks: [] }));
// });

// router.post("/:id/tasks", (req, res) => {
//   res.status(201).json(successResponse("Task created successfully", { boardId: req.params.id }));
// });

// export default router;



import { Router } from "express";
import { successResponse } from "../../utils/apiResponse.js";
import { validate } from "../../middleware/validate.middleware.js";
import { listBoardsSchema } from "./board.validation.js";
import { AppError } from "../../errors/AppError.js";

const router = Router();

router.get(
  "/",
  validate(listBoardsSchema),
  (req, res) => {
    console.log("req.query →", req.query);

    res.json(successResponse("Boards fetched successfully", {
      query  : req.query,
      boards : [],
    }));
  },
);

router.post("/", (_req, res) => {
  res.status(201).json(successResponse("Board created successfully", { id: "mock-id" }));
});

router.delete("/:id", (_req, res) => {
  res.status(204).send();
});

router.get("/:id/error", (_req, _res, next) => {
  next(new AppError(404, "Board not found"));
});

router.get("/:id/tasks", (req, res) => {
  res.json(successResponse("Tasks fetched successfully", {
    boardId : req.params.id,
    tasks   : [],
  }));
});

router.post("/:id/tasks", (req, res) => {
  res.status(201).json(successResponse("Task created successfully", {
    boardId : req.params.id,
  }));
});

export default router;