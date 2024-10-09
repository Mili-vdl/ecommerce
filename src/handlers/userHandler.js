const getAllUsersHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    res.send(`Este es`);
  } else {
    res.send("Estos son los usuarios");
  }
};

const getOneUserHandler = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("Este es el detalle de un usuario");
};

const createUserHandler = (req, res) => {
  const { id, name, username, email } = req.body;
  res.send(`${id}, ${name}, username, email`);
};

const updateUserHandler = (req, res) => {
  res.send("Actualizo usuario");
};

const deleteUserHandler = (req, res) => {
  res.send("Eliminando usuario");
};

module.exports = {
  getAllUsersHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
