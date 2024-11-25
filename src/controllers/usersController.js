const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUserController = async (name, username, email, password, role) => {
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  const newUser = new User({
    name,
    username,
    email,
    password: hashPassword,
    role,
  });
  unewUser.save();
  return newUser;
};

const getAllUsersController = () => {
  if (!users.length) throw new Error("No hay usuarios");
  return users;
};

const getUserByNameController = (name) => {
  const usersByName = users.filter((user) => user.name === name);
  if (!usersByName.length) throw new Error("No hay usuarios");

  return usersByName;
};

const getUserByIdController = (id) => {
  const userById = users.find((user) => user.id === Number(id));
  return userById;
};

const updateUserController = (id, name, username, email) => {
  const newUser = { name, username, email };
  const userById = getUserByIdController(id);
  if (userById) {
    Object.assign(userById, newUser);
  }
  return userById;
};

const deleteUserController = (id) => {
  const index = users.findIndex((user) => user.id === Number(id));
  let deleteUser = null;
  if (index !== -1) {
    [deleteUser] = users.splice(index, 1);
  }
  return deleteUser;
};

module.exports = {
  createUserController,
  getAllUsersController,
  getUserByNameController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
};
