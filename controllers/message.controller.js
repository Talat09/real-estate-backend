import prisma from "../lib/prisma.js";

//message.controller.js
export const addMessage = async (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add message!" });
  }
};
