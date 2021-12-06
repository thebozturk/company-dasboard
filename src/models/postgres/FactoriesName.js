module.exports = (sequelize, DataTypes) => {
  let FactoriesName = sequelize.define("FactoriesName", {
    usedUnit: {
      type: DataTypes.STRING,
    },
    dateRange: {
      type: DataTypes.DATE,
    },
    useOfKw: {
      type: DataTypes.INTEGER,
    },
    usageFee: {
      type: DataTypes.INTEGER,
    },
    discountedPrice: {
      type: DataTypes.BOOLEAN,
    },
  });
  return FactoriesName;
};
