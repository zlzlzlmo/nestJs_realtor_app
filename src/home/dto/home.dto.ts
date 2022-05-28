import { Image, PropertyType } from '@prisma/client';
import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export class HomeResponseDto {
  id: number;
  address: string;

  @Exclude()
  number_of_berooms: number;

  @Expose({ name: 'numberOfBedrooms' })
  get numberOfBedrooms(): number {
    return this.number_of_berooms;
  }

  @Exclude()
  number_of_bathrooms: number;

  @Expose({ name: 'numberOfBathrooms' })
  get numberOfBathrooms(): number {
    return this.number_of_bathrooms;
  }

  city: string;

  @Exclude()
  listed_date: Date;

  @Expose({ name: 'listedDate' })
  get listedDate() {
    return this.listed_date;
  }

  price: number;

  image: string;

  @Exclude()
  land_size: number;

  @Expose({ name: 'landSize' })
  get landSize() {
    return this.land_size;
  }

  propertyType: string;

  @Exclude()
  created_at: Date;

  @Expose({ name: 'createdAt' })
  get createdAt() {
    return this.created_at;
  }

  @Exclude()
  updated_at: Date;

  @Expose({ name: 'updatedAt' })
  get updatedAt() {
    return this.updated_at;
  }

  @Exclude()
  realtor_id: number;

  @Expose({ name: 'realtorId' })
  get realtorId() {
    return this.realtor_id;
  }

  constructor(partial: Partial<HomeResponseDto>) {
    Object.assign(this, partial);
  }
}

class CreateHomeDto {
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @IsPositive()
  @Expose({ name: 'numberOfBedrooms' })
  numberOfBedrooms(): number {
    return this.number_of_bedrooms;
  }

  @IsNumber()
  @IsPositive()
  @Expose({ name: 'landSize' })
  landSize() {
    return this.land_size;
  }

  @Exclude()
  number_of_bedrooms: number;

  @Exclude()
  land_size: number;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsEnum(PropertyType)
  propertyType: PropertyType;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Image)
  images: Image[];

  constructor(partial: Partial<CreateHomeDto>) {
    Object.assign(this, partial);
  }
}
