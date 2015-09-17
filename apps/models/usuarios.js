"use strict";

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {type : DataTypes.BIGINT, autoIncrement: true, primaryKey: true},
    user: {type: DataTypes.STRING, required: true, unique: true},
    password: {type: DataTypes.STRING , required: true, unique:true},
    email: {type : DataTypes.STRING, required: true, unique:true},
    type_user:{type: DataTypes.BIGINT, required: true} ,
    status: {type: DataTypes.STRING, required: true}
  }, {
    classMethods: {
        associate: function(models)
        { 


        }
      
    },
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'users'
  });

  return Users;
};
