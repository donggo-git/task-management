const Task = require("../models/Task")
const User = require("../models/User")
const bcrypt = require("bcryptjs")

const getUsers = async (req, res) => {
    try {
        const users = await User.find({ role: 'member' }).select("-password");
        //Add task counts to each user
        const userWithTaskCounts = await Promise.all(users.map(async (user) => {
            const pendingTask = await Task.countDocuments({ assignedTo: user._id, status: "Pending" })
            const inProgressTask = await Task.countDocuments({ assignedTo: user._id, status: "In Progress" })
            const completedTask = await Task.countDocuments({ assignedTo: user_id, status: "Completed" })

            return {
                ...user._doc,
                pendingTask,
                inProgressTask,
                completedTask
            }
        }))

        return res.status(200).json(userWithTaskCounts)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.param.id).select("-password")
        if (!user)
            return res.status(404).json({ message: `Cannot find user with id ${req.param.id}` })

        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

const deleteUser = async (req, res) => {
    try { } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

module.exports = { getUsers, getUserById, deleteUser }