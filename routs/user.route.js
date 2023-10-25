const express = require("express");
const { getAllUsers } = require("../controllers/users.controllers");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getAllUsers);
router.post("/", getAllUsers);

module.exports = router;
