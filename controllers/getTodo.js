const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entrie Todo Data is fetched",
    });
  } catch (err) {
    console.erroe(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};

exports.getTodobyId = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      res.status(404).json({
        success: false,
        message: `No Data Found With Id : ${id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched  `,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
