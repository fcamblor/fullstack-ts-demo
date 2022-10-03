import { Injectable } from '@nestjs/common';
import {Hello} from '@shared/domains.js'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello '+new Hello().who;
  }
}
