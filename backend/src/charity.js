module.exports = function(sequelize, app) {
    const CharityModel = require("./models/charity.model.js")(sequelize);
    const CharityRouter = require("./routes/charity.routes")(sequelize, CharityModel);
    app.use('/api/charity', CharityRouter);
}