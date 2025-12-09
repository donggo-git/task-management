const Task = require("../models/Task")
const User = require("../models/User")
const bcrypt = require("bcryptjs")

const getUsers = async (req, res) => {
    try { } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

const getUserById = async (req, res) => {
    try { } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

const deleteUser = async (req, res) => {
    try { } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

module.exports = { getUsers, getUserById, deleteUser }