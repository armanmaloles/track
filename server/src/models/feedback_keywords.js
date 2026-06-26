// src/models/feedback_keywords.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FeedbackKeyword = sequelize.define('feedback_keywords', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  metric_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  keyword: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  frequency: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'feedback_keywords',
  indexes: [
    { unique: true, fields: ['metric_date', 'keyword'] }
  ]
});

module.exports = FeedbackKeyword;