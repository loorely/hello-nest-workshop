import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { ExpenseGroupDto } from 'src/dto/expense-group.dto';

const prisma = new PrismaClient(); 

@Injectable()
export class ExpenseGroupService {

  constructor(private prisma: PrismaService){}

  findAll() {
    return prisma.expenseGroup.findMany();
  }

  createExpenseGroup(expenseGroupDto: ExpenseGroupDto){
    return prisma.expenseGroup.create({
      data: {
        name: expenseGroupDto.name,
        color: expenseGroupDto.color
      }
    })

    /*return {
      name: expenseGroupDto.name,
      color: expenseGroupDto.color,
      id:1
    }; */
  }
}
