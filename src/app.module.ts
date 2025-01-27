import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootAMiddleware } from './root-a.middleware';
import { RootBMiddlewareB } from './root-b.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RootAMiddleware).forRoutes('(.*)');
    consumer.apply(RootBMiddlewareB).forRoutes('{*path}');
  }
}
