import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface UserInfo {
  name: string;
  id: number;
  iat: number;
  exp: number;
}

export const User = createParamDecorator((context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  return request.user as UserInfo;
});
