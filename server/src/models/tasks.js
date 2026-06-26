// src/models/tasks.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('tasks', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  color: {
    type: DataTypes.STRING(7),
    allowNull: true
  },
  priority: {
    type: DataTypes.ENUM('high','medium','low'),
    defaultValue: 'medium'
  },
  visibility: {
    type: DataTypes.ENUM('personal','department','campus'),
    allowNull: false
  },
  start_datetime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  end_datetime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  department_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  office_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  creator_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  assignee_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  remind_before_minutes: {
    type: DataTypes.INTEGER,
    defaultValue: 15
  },
  is_email_reminder: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'tasks',
  indexes: [
    { fields: ['creator_id'] }
  ]
});

module.exports = Task;