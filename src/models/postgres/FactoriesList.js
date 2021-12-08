module.exports = (sequelize, DataTypes) => {
  let FactoriesList = sequelize.define("FactoriesList", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    factoryName: {
      type: DataTypes.STRING,
    },
    membershipDate: {
      type: DataTypes.DATE,
    },
    membershipExpirationDate: {
      type: DataTypes.DATE,
    },
    numberOfEmployees: {
      type: DataTypes.INTEGER,
    },
    specialMember: {
      type: DataTypes.BOOLEAN,
    },
  });
  return FactoriesList;
};
