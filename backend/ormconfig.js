module.exports = {
  type: 'postgres',
  port: `${process.env.POSTGRES_PORT}`,
  host: 'localhost',
  username: `${process.env.POSTGRES_USER}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  database: `${process.env.POSTGRES_DB}`,
  migrations: ['./src/shared/infra/typeorm/migrations/**.ts'],
  entities: ['./src/modules/**/entities/**.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
  logging: ['error'],
};
