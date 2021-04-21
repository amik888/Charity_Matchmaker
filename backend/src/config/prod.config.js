module.exports = {
    cors: {
        origin: "http://localhost:3000/"
    },
    db: {
        HOST: "69.247.200.43",
        USER: "hackathon",
        PASSWORD: "Apr21",
        DB: "charity_matchmaker",
        /** @type {import("sequelize").Dialect} */
        // @ts-ignore
        dialect: "mysql",
        pool: {
          max: 6,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
    }
};