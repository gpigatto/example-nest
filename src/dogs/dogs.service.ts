import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  getAuAu(): string {
    return 'AuAu!';
  }
}
