const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const todo = await ToDoModel.find();
    res.send(todo);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).send("Error fetching todos");
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  try {
    const data = await ToDoModel.create({ text });
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error('Error saving todo:', error);
    res.status(500).send("Error saving todo");
  }
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  console.log('id ---> ', _id);
  try {
    await ToDoModel.findByIdAndDelete(_id);
    res.status(200).send("Deleted Successfully...");
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).send("Error deleting todo");
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    await ToDoModel.findByIdAndUpdate(_id, { text });
    res.status(200).send("Updated Successfully...");
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).send("Error updating todo");
  }
};
