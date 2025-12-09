const express = require('express')
const { adminOnly, protect } = require("../middlewares/authMiddleware")
const router = express.Router()

//user management routes
router.get("/", protect, adminOnly, getUsers);
router.get("/:id", protect, getUserById);
router.delete("/:id", protect, adminOnly, deleteUser);

module.exports = router;