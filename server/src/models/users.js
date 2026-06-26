const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: true
    // ← NO unique: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
    // ← NO unique: true
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  account_code_id: {
    type: DataTypes.UUID,
    allowNull: true
    // ← NO unique: true
  },
  status: {
    type: DataTypes.ENUM('pending','active','blocked','suspended'),
    defaultValue: 'pending'
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
  tableName: 'users',
  indexes: [
    { unique: true, fields: ['username'] },
    { unique: true, fields: ['email'] },
    { unique: true, fields: ['account_code_id'] }
  ]
});

module.exports = User;