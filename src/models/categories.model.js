const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('category', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
};