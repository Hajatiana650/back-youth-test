import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ReveilModule } from './modules/reveil/reveil.module';

@Module({
  imports: [UsersModule, ReveilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
