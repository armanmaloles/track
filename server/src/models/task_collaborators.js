// src/models/task_collaborators.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TaskCollaborator = sequelize.define('task_collaborators', {
  task_id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    primaryKey: true
  }
}, {
  timestamps: false,
  tableName: 'task_collaborators'
});

module.exports = TaskCollaborator;