'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boat = sequelize.define('Boat', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Boat.associate = function(models) {
    // associations can be defined here
  };
  return Boat;
};