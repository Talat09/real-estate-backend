import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
//user.controller.js
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to get users" });
  }
};
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to get users" });
  }
};
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, ...inputs } = req.body;
  // Logging to inspect the inputs and tokenUserId
  console.log("User ID:", id);
  console.log("Token User ID:", tokenUserId);
  console.log("Inputs:", inputs);
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }
  let updatedPassword = null;

  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
      },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to Update user" });
  }
};
export const deleteUser = (req, res) => {
  try {
    res.send("Delete Single User");
  } catch (error) {
    res.status(500).json({ message: "Failed to Delete user" });
  }
};
