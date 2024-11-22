const { Router } = require("express");
const {
  getAllUsersHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../handlers/userHandler");
const { verifyToken } = require("../middleware/verifyMiddleware");
const authorizeAdmin = require("../middleware/authorizationMiddleware");
const userRouter = Router();

userRouter.get("/", getAllUsersHandler);
userRouter.get("/:id", getOneUserHandler);
userRouter.post("/", verifyToken, authorizeAdmin, createUserHandler);
userRouter.put("/:id", verifyToken, authorizeAdmin, updateUserHandler);
userRouter.delete("/:id", verifyToken, authorizeAdmin, deleteUserHandler);

module.exports = userRouter;
