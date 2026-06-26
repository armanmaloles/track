// src/models/audit_logs.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AuditLog = sequelize.define('audit_logs', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  actor_admin_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  target_user_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  action_type: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  entity_table: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  entity_id: {
    type: DataTypes.UUID,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'audit_logs'
});

module.exports = AuditLog;