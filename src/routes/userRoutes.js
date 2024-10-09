const { Router } = require("express");
const {
  getAllUsersHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../handlers/userHandler");
const userRouter = Router();

userRouter.get("/", getAllUsersHandler);
userRouter.get("/:id", getOneUserHandler);
userRouter.post("/", createUserHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.delete("/:id", deleteUserHandler);

module.exports = userRouter;
