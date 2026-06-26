const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserAuthIdentity = sequelize.define('user_auth_identities', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  provider: {
    type: DataTypes.ENUM('local','google'),
    allowNull: false
  },
  provider_identifier: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  is_primary: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'user_auth_identities',
  indexes: [
    { unique: true, fields: ['user_id', 'provider'] },
    { unique: true, fields: ['provider', 'provider_identifier'] }
  ]
});

module.exports = UserAuthIdentity;