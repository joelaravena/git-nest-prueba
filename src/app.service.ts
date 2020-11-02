import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Joel ya esta listo el CI/CD v1 buena :D';
  }
}
