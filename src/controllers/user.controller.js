// user.controller.js

import User from '../models/user.model.js';

const userCtrl = {};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user).status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, mail, phone, age } = req.body;
    const newUser = new User({
      firstName,
      lastName,
      mail,
      phone,
      age
    });
    await newUser.save();
    res.json({ message: 'Usuario creado exitosamente', user: newUser }).status(201); // Aquí se añade el mensaje personalizado
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, mail, phone, age } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
      firstName,
      lastName,
      mail,
      phone,
      age
    });
    res.json({ message: 'Usuario actualizado exitosamente' }).status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado exitosamente' }).status(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default userCtrl;
