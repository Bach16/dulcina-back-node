const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.BLOB,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    times_sold: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    highlight_date: {
      type: DataTypes.DATE,
    },
  });
};
