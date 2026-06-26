const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venue = sequelize.define('venues', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  code: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  building_location: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  is_archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  created_by: {
    type: DataTypes.UUID,
    allowNull: false
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
  tableName: 'venues',
  indexes: [
    { unique: true, fields: ['code'] }
  ]
});

module.exports = Venue;