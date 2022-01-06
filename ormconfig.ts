import {
  dbHost,
  dbDatabaseName,
  dbUsername,
  dbPassword,
  dbPort,
} from './src/constants/envVariables';

export default {
  type: 'postgres',
  host: dbHost,
  port: dbPort,
  username: dbUsername,
  password: dbPassword,
  database: dbDatabaseName,
  synchronize: false,
  logging: false,
  entities: ['src/models/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
