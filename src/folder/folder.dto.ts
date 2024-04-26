import { ApiProperty } from '@nestjs/swagger';

export class FolderDto {
  @ApiProperty({
    example: 'Animals',
    description: 'folder name',
    required: true,
  })
  name: string;
}
