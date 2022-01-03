module.exports = {
  type: 'postgres',
  port: `${process.env.POSTGRES_PORT}`,
  host: 'localhost',
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.POSTGRES_DB}`,
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  logging: ['error'],
};
