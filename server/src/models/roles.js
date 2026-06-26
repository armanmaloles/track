const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('roles', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
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
  tableName: 'roles',
  indexes: [
    { unique: true, fields: ['name'] }
  ]
});

module.exports = Role;