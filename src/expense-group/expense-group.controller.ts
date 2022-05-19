import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ExpenseGroupDto } from 'src/dto/expense-group.dto';
import { ExpenseGroupService } from './expense-group.service';

@Controller('expense-group')
export class ExpenseGroupController {
  constructor(private readonly expenseGroupService: ExpenseGroupService) {}

  @Get()
  findAll() {
    return this.expenseGroupService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createExpenseGroup(@Body() expenseGroupDto: ExpenseGroupDto) {
    return this.expenseGroupService.createExpenseGroup(expenseGroupDto);
  }
}
