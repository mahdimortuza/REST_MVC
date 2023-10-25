const express = require("express");
const { getAllUsers, createUser } = require("../controllers/users.controllers");
const router = express.Router();

router.get("/", getAllUsers);
router.post('/', createUser)

router.post("/", getAllUsers);

module.exports = router;
