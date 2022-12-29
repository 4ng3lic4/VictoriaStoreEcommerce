// eslint-disable-next-line no-undef
//const { STRING } = require('sequelize');
// eslint-disable-next-line no-undef
const { Model, DataTypes } = require('sequelize');

// eslint-disable-next-line no-undef
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    
    // * `id`
    id: {
      // * Integer.
      type: DataTypes.INTEGER,
      // * Doesn't allow null values.
      allowNull: false,
      // * Set as primary key.
    primaryKey: true,
      // * Uses auto increment.
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull:false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// eslint-disable-next-line no-undef
module.exports = Category;
