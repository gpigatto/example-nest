import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DogsService } from './dogs.service';

@ApiTags('dogs')
@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get('auau')
  getHello(): string {
    return this.dogsService.getAuAu();
  }
}
