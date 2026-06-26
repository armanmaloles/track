const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Location = sequelize.define('locations', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  exact_location: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  street: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  map_location: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  created_by: {
    type: DataTypes.UUID,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'locations'
});

module.exports = Location;