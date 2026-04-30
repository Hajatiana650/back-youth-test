import { Controller, Get, Logger } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('post')
export class PostController {
  private logger = new Logger(PostController.name);

  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOperation({ summary: 'list all posts' })
  @ApiResponse({ status: 200, description: 'success' })
  async getAllPosts() {
    try {
      this.logger.log('Fetching all posts...');
      const result = await this.postService.getAllPosts();
      this.logger.log('Posts fetched successfully');
      return result;
    } catch (error) {
      this.logger.error('Error fetching posts:', error);
      throw error;
    }
  }
}
