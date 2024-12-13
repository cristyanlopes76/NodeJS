import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, 
      username: 'postgres',
      password: 'postgres',
      database: 'bancoag',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Use apenas em desenvolvimento
    }),
    ProdutosModule,
  ],
})

export class AppModule {}
