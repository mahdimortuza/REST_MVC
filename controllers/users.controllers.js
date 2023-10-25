const { v4: uuidv4 } = require("uuid");
const User = require("../model/User.model");

const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
};

const getOneUser = (req, res) => {
  res.status(200).json({
    message: "Get one user",
  });
};

const createUser = (req, res) => {
  const newUser = new User({
    id: uuidv4(),
    name: req.body.name,
    age: Number(req.body.age),
  });
  res.status(201).json({
    message: "User is created",
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: "User is updated",
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    message: "User is deleted",
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
