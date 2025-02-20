import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SumServiceService } from './sum-service/sum-service.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumServiceService,
  ) {}

  @Get('/sum')
  getSum(@Query('a') a: number, @Query('b') b: number): number {
    return this.sumService.getSum(a, b);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
