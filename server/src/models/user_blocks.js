const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserBlock = sequelize.define('user_blocks', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  target_user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  blocked_by_admin_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  block_status: {
    type: DataTypes.ENUM('active','lifted'),
    defaultValue: 'active'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  lifted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'user_blocks'
});

module.exports = UserBlock;