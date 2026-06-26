// src/models/attachments.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attachment = sequelize.define('attachments', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  entity_type: {
    type: DataTypes.ENUM('event','task'),
    allowNull: false
  },
  entity_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  file_url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  file_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  file_size: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'attachments'
});

module.exports = Attachment;