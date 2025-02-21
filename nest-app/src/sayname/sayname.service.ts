import { Injectable } from '@nestjs/common';

@Injectable()
export class SaynameService {
  sayMyName(name: string) {
    return `My name is ${name}`;
  }
}
