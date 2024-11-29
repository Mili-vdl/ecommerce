const { response } = require("express");
const {
  createUserController,
  getAllUsersController,
  getUserByNameController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} = require("../controllers/usersController");
const Joi = require("joi");
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^\d{6}$/)
    .required(),
  role: Joi.string().valid("admin", "user").required(),
});

const getAllUsersHandler = async (req, res) => {
  try {
    const name = req.query;
    if (name) {
      const response = await getUserByNameController(name);
      res.status(200).send(response);
    } else {
      const response = await getAllUsersController();
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const getOneUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUserByIdController(id);
    res.send(response);
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const createUserHandler = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) res.status(418).send(error.details[0].message);
    const { name, username, email, password, role } = req.body;
    const response = await createUserController(
      name,
      username,
      email,
      password,
      role
    );
    res.status(201).send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const updateUserHandler = (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, email } = req.body;
    const response = updateUserController(id, name, username, email);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const deleteUserHandler = (req, res) => {
  try {
    const { id } = req.params;
    const response = deleteUserController(id);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

module.exports = {
  getAllUsersHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
