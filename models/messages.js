'use strict';
module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define('messages', {
    body: DataTypes.TEXT
  },});

   messages.associate = function(models) {
     messages.belongsTo(models.users, {as: 'users', foreignKey: 'userid'})
   }
  return messages;
};
