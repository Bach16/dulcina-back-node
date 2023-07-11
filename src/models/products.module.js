const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    id:{
      type: DataTypes.STRING,
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
  },
  {
    timestamps:false
  });
};