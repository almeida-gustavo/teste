import dotenv from 'dotenv';

dotenv.config();

export const serverPort = process.env.PORT || 3000;

export const dbHost = process.env.DB_HOST;
export const dbUsername = process.env.DB_USER;
export const dbPassword = process.env.DB_PASS;
export const dbDatabaseName = process.env.DB_NAME;
export const dbPort = process.env.DB_PORT;
