import { Controller, Param, Get, NotFoundException } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get('factorial/:number')
    getFactorial(@Param('number') number: string): { factorial: number }{
        const num = parseInt(number, 10);

        if(isNaN(num) || num < 0) {
            throw new NotFoundException('INVALID!');
        }
        const factorial = this.calculateFactorial(num);
        return { factorial };
    }

        private calculateFactorial(num: number): number{
            if(num === 0 || num === 1) return 1;
                return num * this.calculateFactorial(num - 1);
            
        }
}
