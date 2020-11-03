import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>hola joel, lo haz hecho :D</h1>';
  }
}
