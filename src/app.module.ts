import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseGroupModule } from './expense-group/expense-group.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ExpenseGroupModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
