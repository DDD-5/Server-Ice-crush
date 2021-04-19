import * as dotenv from 'dotenv';
dotenv.config();

export const config: any = {
  db_host: process.env.DB_HOST,
  db_port: process.env.PORT,
  db_user_name: process.env.DB_USER_NAME,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
};
