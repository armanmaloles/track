// src/models/account_code_requests.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AccountCodeRequest = sequelize.define('account_code_requests', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  full_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  department_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  office_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  role_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending','approved','rejected'),
    defaultValue: 'pending'
  },
  admin_notes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  reviewed_by_admin_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  reviewed_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'account_code_requests'
});

module.exports = AccountCodeRequest;