import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HomeResponseDto } from './dto/home.dto';

@Injectable()
export class HomeService {
  constructor(private readonly prismaService: PrismaService) {}
  // 맵핑되어있는 이미지 테이블에서 url 엔티티를 가져온다
  // take를 사용함으로서 limit을 지정할수잇다.
  async getHomes(): Promise<HomeResponseDto[]> {
    const homes = await this.prismaService.home.findMany({
      select: {
        id: true,
        address: true,
        number_of_bathrooms: true,
        number_of_bedrooms: true,
        city: true,
        price: true,
        images: {
          select: {
            url: true,
          },
          take: 1,
        },
      },
    });
    return homes.map((home) => {
      const fetchHome = {
        ...home,
        image: home.images[0].url,
      };
      delete fetchHome.images;
      return new HomeResponseDto(fetchHome);
    });
  }
}
