const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('user', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },    
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
};