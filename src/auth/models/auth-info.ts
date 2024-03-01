import { ApiProperty } from '@nestjs/swagger';

const exampleAuthToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiaWQiOiJhM2YwNzcwZC1kNDU0LTQzNzYtOGY4Mi00NzM0NWFmMTBkZmIiLCJyb2xlcyI6W3siaWQiOiIyYzE0YTkyMi1mZmRmLTRjOWMtOWM4NC00ZmMxY2JlNGMwZDQiLCJ2YWx1ZSI6IlVzZXIiLCJkZXNjcmlwdGlvbiI6IlNpbXBsZSB1c2VyIHJvbGUifV0sImlhdCI6MTY5NzA2MDk2MiwiZXhwIjoxNjk3MTQ3MzYyfQ.KX5hA-2g0-DBZu5OcKh95dFj5iAN7xvM4FDeMdSDpfM';

export class AuthInfo {
  @ApiProperty({ example: exampleAuthToken, description: 'auth token' })
  accessToken: string;
}
