const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('product', {
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
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false,      
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    times_sold: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    highlight_date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  });
};