import {IsNumber, IsOptional, IsString, Matches} from "class-validator"; 

export class ExpenseGroupDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsString()
    name:string;

    @IsString()
    @Matches(/^#[0-9A-F]{6}$/i)
    color: string;
}