import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {
  getSum(a: string, b: string): string {
    return (parseInt(a) + parseInt(b)).toString();
  }
}
