import { Controller, Get, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  private logger = new Logger(UsersController.name);
  
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'list all user' })
  @ApiResponse({ status: 200, description: 'success' })
  async getAllUsers() {
    try {
      this.logger.log('Fetching all users...');
      const result = await this.usersService.getAllUsers();
      this.logger.log('Users fetched successfully');
      return result;
    } catch (error) {
      this.logger.error('Error fetching users:', error);
      throw error;
    }
  }

}
