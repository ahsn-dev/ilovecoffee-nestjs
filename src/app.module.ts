import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass1234',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true, // make sure to turn this off in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
