import prisma from "../lib/prisma.js";

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
export const updateUser = (req, res) => {
  try {
    res.send("Updated Single User");
  } catch (error) {
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
