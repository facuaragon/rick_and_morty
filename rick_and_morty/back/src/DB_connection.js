require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASS, DB_HOST, DB_NAME} = process.env;
const userModel = require('./models/User')
const favoriteModel = require('./models/Favorite')
const characterModel = require('./models/Character')



const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);


characterModel(sequelize);
userModel(sequelize);
favoriteModel(sequelize);

const {Favorite, User} = sequelize.models;

User.belongsToMany(Favorite, {through: 'user_favorite'})
Favorite.belongsToMany(User, {through: 'user_favorite'})


module.exports = {
   ...sequelize.models,
   conn: sequelize,
   sequelize
};
