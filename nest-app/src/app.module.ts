import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumServiceService } from './sum-service/sum-service.service';
import { SaynameModule } from './sayname/sayname.module';
import { AuthchecMiddleware } from './middleware/authchec.middleware';

@Module({
  imports: [SaynameModule],
  controllers: [AppController],
  providers: [AppService, SumServiceService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthchecMiddleware)
      .forRoutes({ path: '', method: RequestMethod.ALL });
  }
}
