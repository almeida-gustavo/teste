import {
  dbHost,
  dbDatabaseName,
  dbUsername,
  dbPassword,
  dbPort,
} from '../constants/envVariables';

const databaseConfiguration = {
  dialect: 'postgres',
  host: dbHost,
  username: dbUsername,
  password: dbPassword,
  database: dbDatabaseName,
  port: dbPort,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

export default databaseConfiguration;
