
const Sequelize = require("sequelize");

/**
 * 
 * @param {Sequelize.Sequelize} sequelize 
 * @returns {Sequelize.ModelCtor<Sequelize.Model<any, any>>}
 */
module.exports = (sequelize) => {
  const Charity = sequelize.define("Charity", {
    CID: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    Ascore: {
      type: Sequelize.DOUBLE
    }
  },
  {
    freezeTableName: true
  });

  return Charity;
};