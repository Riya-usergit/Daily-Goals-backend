const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Todo', todoSchema);