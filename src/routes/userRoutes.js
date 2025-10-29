import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/")
  .get(getAllUsers)
  .post(createUser);

router.route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export default router;
