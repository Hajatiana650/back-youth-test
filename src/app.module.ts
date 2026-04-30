import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ReveilModule } from './modules/reveil/reveil.module';
import { TacheModule } from './modules/taches/taches.module';
import { CategorieModule } from './modules/categorie/categorie.module';

@Module({
  imports: [UsersModule, ReveilModule, TacheModule, CategorieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
