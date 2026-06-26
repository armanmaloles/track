// src/models/event_collaborators.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EventCollaborator = sequelize.define('event_collaborators', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  event_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  permission: {
    type: DataTypes.ENUM('edit','view'),
    defaultValue: 'edit'
  }
}, {
  timestamps: false,
  tableName: 'event_collaborators'
});

module.exports = EventCollaborator;