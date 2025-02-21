import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SumServiceService } from './sum-service/sum-service.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumServiceService,
  ) {}

  @Get('/sum')
  getSum(@Query('num1') a: string, @Query('num2') b: string): number {
    return parseInt(this.sumService.getSum(a, b));
  }

  @Get('/askquestion')
  askQuestion(): string {
    return 'how are you?';
  }

  @Post('answer')
  answer(@Body() getAnswerDto: AnswerDto): string {
    return getAnswerDto.answer;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
