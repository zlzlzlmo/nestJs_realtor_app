import { PropertyType } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

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
