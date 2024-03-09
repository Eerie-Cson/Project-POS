import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InventoriesService } from './inventories.service';
import { CreateInventoryInput } from './dto/create-inventory.input';
import { UpdateInventoryInput } from './dto/update-inventory.input';

@Resolver('Inventory')
export class InventoriesResolver {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Mutation('createInventory')
  create(@Args('createInventoryInput') createInventoryInput: CreateInventoryInput) {
    return this.inventoriesService.create(createInventoryInput);
  }

  @Query('inventories')
  findAll() {
    return this.inventoriesService.findAll();
  }

  @Query('inventory')
  findOne(@Args('id') id: number) {
    return this.inventoriesService.findOne(id);
  }

  @Mutation('updateInventory')
  update(@Args('updateInventoryInput') updateInventoryInput: UpdateInventoryInput) {
    return this.inventoriesService.update(updateInventoryInput.id, updateInventoryInput);
  }

  @Mutation('removeInventory')
  remove(@Args('id') id: number) {
    return this.inventoriesService.remove(id);
  }
}
