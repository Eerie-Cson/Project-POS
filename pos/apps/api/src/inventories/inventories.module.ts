import { Module } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { InventoriesResolver } from './inventories.resolver';

@Module({
  providers: [InventoriesResolver, InventoriesService],
})
export class InventoriesModule {}
