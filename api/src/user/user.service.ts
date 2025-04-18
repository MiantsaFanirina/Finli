import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor (
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return { email: false, password: false };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const register = this.jwtService.sign({ id: user.id });
      return { userId: user.id, register };
    } else {
      return { email: true, password: false };
    }
  }


  async create(createUserDto: Prisma.UserCreateInput) {
    const {password} = createUserDto;

    const passwordHash = await bcrypt.hash(password, 10);

    // Create the user
    const createdUser = await this.prisma.user.create({
      data: { ...createUserDto, password: passwordHash },
    });

    if (!createdUser) {
      return new Error('User not created');
    } else {
      const register = this.jwtService.sign({ id: createdUser.id });
      return { userId: createdUser.id, register };
    }
  }

  async findAll() {
    return await this.prisma.user.findMany({
        omit: { password: true }
    });
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      omit: { password: true },
      where: {
        id
      }
    });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    const user = await this.prisma.user.update({
      omit: { password: true },
      where: {
        id
      },
      data: updateUserDto
    })



    return user;
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      omit: { password: true },
      where: {
        id
      }
    });
  }
}
