import { clientModel } from './client.model';
import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  public client = clientModel;
  create(createUserDto: CreateClientDto) {
    const id = new Date().valueOf();
    const item = {
      ...createUserDto,
      id,
    };
    this.client.createProduct(item);
    return 'This action adds a new user';
  }

  findAll() {
    return clientModel.getProduct();
  }

  findOne(id: number) {
    const record: CreateClientDto = this.findAll().find((item) => {
      return item.id == id;
    });
    if (record) {
      return record;
    }
  }

  update(id, updateUserDto: UpdateClientDto) {
    const items = this.findAll();
    const index = items.findIndex((item) => {
      return item.id == id;
    });
    if (index >= 0) {
      this.client.updateProduct(index, updateUserDto);
      return `user update with id ${updateUserDto.id}`;
    }
  }

  remove(id: number) {
    const index = this.client.getProduct().findIndex((item) => {
      return item.id == id;
    });
    if (index >= 0) {
      this.client.deleteProduct(id);
      return `This action removes a #${id} user`;
    } else {
      throw new Error('No record found to delete');
    }
  }
}
