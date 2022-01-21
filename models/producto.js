'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsToMany(Pedido, { through: 'Productoypedido'})
      Producto.belongsToMany(Categoria, { through: 'Categoriayproducto'})
    }
  }
  Producto.init({
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    usado: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    año: DataTypes.INTEGER,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};