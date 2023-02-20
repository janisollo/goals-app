const { Module } = require("module");
const asyncHandler = require("express-async-handler");

// @desc    Get Goals
// @route   Get /api/goals
// @access  Private

const getGoals = asyncHandler(async (req, res) => {
  res.json({ message: "Hello everykghyujolfdhkpne" });
});
// @desc    Set Goal
// @route   POST /api/goals
// @access  Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.json({ message: "Set Goal" });
});

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private

const putGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Update goal ${req.params.id}` });
});
// // @desc    Delete Goal
// // @route   DELETE /api/goals/:id
// // @access  Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  putGoal,
  deleteGoal,
};
