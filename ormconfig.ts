/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const dotenv = require('dotenv');

const srcPath = __dirname;

const envPath = path.resolve(srcPath, '../.env');

dotenv.config({ path: envPath });

const config = {
  type: process.env.DATABASE_CLIENT as 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  extra: {
    ssl: true
  },
  synchronize: true,
  entities: [srcPath + '/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default config;
