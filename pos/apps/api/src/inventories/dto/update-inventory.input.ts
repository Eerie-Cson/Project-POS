import { CreateInventoryInput } from './create-inventory.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateInventoryInput extends PartialType(CreateInventoryInput) {
  id: number;
}
