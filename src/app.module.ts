import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzasModule } from './pizzas/pizzas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'root',
      database:'pizzapi',
      autoLoadEntities:true,
      synchronize:true,
    }),
    PizzasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
