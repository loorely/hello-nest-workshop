import { Module } from '@nestjs/common';
import { ExpenseGroupController } from './expense-group.controller';
import { ExpenseGroupService } from './expense-group.service';

@Module({
  imports: [],
  controllers: [ExpenseGroupController],
  providers: [ExpenseGroupService],
})
export class ExpenseGroupModule {}
