// src/models/daily_metrics.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DailyMetric = sequelize.define('daily_metrics', {
  metric_date: {
    type: DataTypes.DATEONLY,
    primaryKey: true
  },
  new_users: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  new_admins: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  generated_codes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  used_codes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  blocked_users: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  lifted_blocks: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  successful_logins: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  failed_logins: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  audit_events: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'daily_metrics'
});

module.exports = DailyMetric;