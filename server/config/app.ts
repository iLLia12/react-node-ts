require('dotenv').config()

export default class AppConfig {
  static readonly APP_URL = `${process.env.APP_SCHEMA}://${process.env.APP_HOST}:${process.env.APP_PORT}`;
}