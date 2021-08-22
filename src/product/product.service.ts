import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  private readonly items = [
    {
      id: 1,
      name: 'Burger',
      price: 5.99,
      description: 'Tasty',
      image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
    },
    {
      id: 2,
      name: 'Pizza',
      price: 2.99,
      description: 'Cheesy',
      image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
    },
    {
      id: 3,
      name: 'Tea',
      price: 1.99,
      description: 'Informative',
      image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    },
  ];

  findAll(): UpdateProductDto[] {
    return this.items;
  }

  create(newItem): void {
    const id = new Date().valueOf();
    this.items[id] = {
      ...newItem,
      id,
    };
  }

  find(id: number): CreateProductDto {
    const record: CreateProductDto = this.items.find((item) => {
      return item.id == id;
    });
    if (record) {
      return record;
    }

    throw new Error('No record found');
  }

  update(updatedItem): void {
    const index = this.items.findIndex((item) => {
      return item.id == updatedItem.id;
    });
    if (index) {
      this.items[updatedItem.id] = updatedItem;
      return;
    }

    throw new Error('No record found to update');
  }

  delete(id: number): void {
    const record: CreateProductDto = this.items[id];

    if (record) {
      delete this.items[id];
      return;
    }

    throw new Error('No record found to delete');
  }
}
