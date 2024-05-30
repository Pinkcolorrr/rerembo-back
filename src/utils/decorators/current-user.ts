import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@src/users/user.entity';

type UserRecord = keyof User;

export const CurrentUser = createParamDecorator(
  (data: UserRecord, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
