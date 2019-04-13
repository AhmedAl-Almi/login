const { parse } = require('url');
const { Pool } = require('pg');
require('dotenv').config();

let DB_URL = process.env.DB_URL;

console.log('db_url', DB_URL);

const params = parse(DB_URL);
const [user, password] = params.auth.split(':');

const options = {
  user,
  password,
  port: params.port,
  host: params.hostname,
  database: params.pathname.split('/')[1],
  ssl: params.hostname !== 'localhost',
  max: process.env.DB_MAX_CONNECTIONS || 2,
};
module.exports = new Pool(options);
