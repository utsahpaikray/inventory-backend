import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { userModel } from './user.model';

@Injectable()
export class UserService {
  public users = userModel;
  create(createUserDto: CreateUserDto) {
    const id = new Date().valueOf();
    const item = {
      ...createUserDto,
      id,
    };
    this.users.createProduct(item);
    return 'This action adds a new user';
  }

  findAll() {
    return userModel.getProduct();
  }

  findOne(id: number) {
    const record: CreateUserDto = this.findAll().find((item) => {
      return item.id == id;
    });
    if (record) {
      return record;
    }
  }

  update(id, updateUserDto: UpdateUserDto) {
    const items = this.findAll();
    const index = items.findIndex((item) => {
      return item.id == id;
    });
    if (index >= 0) {
      this.users.updateProduct(index, updateUserDto);
      return `user update with id ${updateUserDto.id}`;
    }
  }

  remove(id: number) {
    const index = this.users.getProduct().findIndex((item) => {
      return item.id == id;
    });
    if (index >= 0) {
      this.users.deleteProduct(id);
      return `This action removes a #${id} user`;
    } else {
      throw new Error('No record found to delete');
    }
  }
}
