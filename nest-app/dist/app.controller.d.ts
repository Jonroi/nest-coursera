import { AppService } from './app.service';
import { SumServiceService } from './sum-service/sum-service.service';
import { AnswerDto } from './dto/app.dto';
export declare class AppController {
    private readonly appService;
    private readonly sumService;
    constructor(appService: AppService, sumService: SumServiceService);
    getSum(a: string, b: string): number;
    askQuestion(): string;
    answer(getAnswerDto: AnswerDto, req: any, res: any): void;
    getHello(): string;
}
