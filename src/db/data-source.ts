import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions:  DataSourceOptions = {
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'aspis',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/db/migrations/*.js']
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;