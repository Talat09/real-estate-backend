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
  const { password, avatar, ...inputs } = req.body;
  // Logging to inspect the inputs and tokenUserId
  // console.log("User ID:", id);
  // console.log("Token User ID:", tokenUserId);
  // console.log("Inputs:", inputs);

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
        ...(avatar && { avatar }),
      },
    });
    const { password: userPassword, ...rest } = updatedUser;
    res.status(200).json(rest);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to Update user" });
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });

    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to Delete users" });
  }
};

export const savePost = async (req, res) => {
  const postId = req.body;
  const tokenUserId = req.userId;
  try {
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId,
        },
      },
    });
    if (savedPost) {
      await prisma.savedPost.delete({
        where: { id: savedPost.id },
      });
      res.status(200).json("Post remove from saved list.", savedPost);
    } else {
      await prisma.savedPost.create({
        data: {
          userId: tokenUserId,
          postId,
        },
      });
      res.status(200).json("Post added to saved list!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to save post" });
  }
};
