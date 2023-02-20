const { Module } = require("module");

// @desc    Get Goals
// @route   Get /api/goals
// @access  Private

const getGoals = (req, res) => {
  res.json({ message: "Hello everykghyujolfdhkpne" });
};
// @desc    Set Goal
// @route   POST /api/goals
// @access  Private

const setGoal = (req, res) => {
  res.json({ message: "Set Goal" });
};

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private

const putGoals = (req, res) => {
  res.json({ message: `Update goal ${req.params.id}` });
};
// // @desc    Delete Goal
// // @route   DELETE /api/goals/:id
// // @access  Private

const deleteGoals = (req, res) => {
  res.json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  putGoals,
  deleteGoals,
};
