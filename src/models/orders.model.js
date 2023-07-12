const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('order', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
};