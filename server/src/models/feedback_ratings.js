// src/models/feedback_ratings.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FeedbackRating = sequelize.define('feedback_ratings', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  rating: {
    type: DataTypes.ENUM('not_good','neutral','good'),
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'feedback_ratings'
});

module.exports = FeedbackRating;