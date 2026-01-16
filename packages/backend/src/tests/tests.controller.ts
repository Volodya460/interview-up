import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestDto, UpdateTestDto } from './dto/create-test.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AtGuard } from 'src/auth/guards/at.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('tests')
@UseGuards(AtGuard, RolesGuard)
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post()
  @Roles('ADMIN')
  create(@Body() dto: CreateTestDto) {
    return this.testsService.create(dto);
  }
  @Get()
  findAll() {
    return this.testsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.testsService.findOne(id);
  }

  @Patch(':id')
  @Roles('ADMIN')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTestDto) {
    return this.testsService.update(id, dto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.testsService.remove(id);
  }
}
