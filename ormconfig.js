require('dotenv').config();

module.exports = {
  type: 'mongodb',
  host: process.env.DB_HOSTS,
  port: Number(process.env.DB_PORT),
  username: '',
  password: '',
  database: process.env.DB_DATABASE,
  useUnifiedTopology: true,
  synchronize: false,
  entities: ['dist/entities/*.js'],
}