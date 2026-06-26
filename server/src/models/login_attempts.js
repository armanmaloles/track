// src/models/login_attempts.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LoginAttempt = sequelize.define('login_attempts', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  method: {
    type: DataTypes.ENUM('local','google'),
    allowNull: false
  },
  attempt_status: {
    type: DataTypes.ENUM('success','failed'),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'login_attempts',
  indexes: [
    { fields: ['created_at'] }
  ]
});

module.exports = LoginAttempt;